use chrono::NaiveDateTime;
use std::fs::File;
use std::io::{BufRead, BufReader};
use std::path::Path;

#[derive(Debug, Clone)]
pub struct AttendanceRecord {
    pub employee_id: i32,
    pub timestamp: NaiveDateTime,
    pub field_3: i32,
    pub field_4: i32,
    pub field_5: i32,
    pub field_6: i32,
}

#[derive(Debug)]
pub enum DataReaderError {
    IoError(std::io::Error),
    ParseError(String),
}

impl From<std::io::Error> for DataReaderError {
    fn from(err: std::io::Error) -> Self {
        DataReaderError::IoError(err)
    }
}

impl std::fmt::Display for DataReaderError {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            DataReaderError::IoError(e) => write!(f, "IO Error: {}", e),
            DataReaderError::ParseError(msg) => write!(f, "Parse Error: {}", msg),
        }
    }
}

impl std::error::Error for DataReaderError {}

pub fn read_attendance_log<P: AsRef<Path>>(
    file_path: P,
) -> Result<Vec<AttendanceRecord>, DataReaderError> {
    let file = File::open(file_path)?;
    let reader = BufReader::new(file);
    let mut records = Vec::new();

    for (line_num, line_result) in reader.lines().enumerate() {
        let line = line_result?;
        let trimmed = line.trim();

        if trimmed.is_empty() {
            continue;
        }

        // Split by whitespace
        let parts: Vec<&str> = trimmed.split_whitespace().collect();

        if parts.len() < 6 {
            eprintln!(
                "Warning: Line {} has insufficient fields: {}",
                line_num + 1,
                trimmed
            );
            continue;
        }

        match parse_record(&parts) {
            Ok(record) => records.push(record),
            Err(e) => {
                eprintln!(
                    "Warning: Error parsing line {}: {} - {}",
                    line_num + 1,
                    trimmed,
                    e
                );
                continue;
            }
        }
    }

    Ok(records)
}

fn parse_record(parts: &[&str]) -> Result<AttendanceRecord, DataReaderError> {
    let employee_id = parts[0]
        .parse::<i32>()
        .map_err(|e| DataReaderError::ParseError(format!("Invalid employee_id: {}", e)))?;

    let datetime_str = format!("{} {}", parts[1], parts[2]);
    let timestamp = NaiveDateTime::parse_from_str(&datetime_str, "%Y-%m-%d %H:%M:%S")
        .map_err(|e| DataReaderError::ParseError(format!("Invalid timestamp: {}", e)))?;

    let field_3 = parts[3]
        .parse::<i32>()
        .map_err(|e| DataReaderError::ParseError(format!("Invalid field_3: {}", e)))?;
    let field_4 = parts[4]
        .parse::<i32>()
        .map_err(|e| DataReaderError::ParseError(format!("Invalid field_4: {}", e)))?;
    let field_5 = parts[5]
        .parse::<i32>()
        .map_err(|e| DataReaderError::ParseError(format!("Invalid field_5: {}", e)))?;
    let field_6 = parts
        .get(6)
        .and_then(|s| s.parse::<i32>().ok())
        .unwrap_or(0);

    Ok(AttendanceRecord {
        employee_id,
        timestamp,
        field_3,
        field_4,
        field_5,
        field_6,
    })
}
