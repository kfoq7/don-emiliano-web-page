use std::fs;
use std::io;
use std::path::Path;

#[derive(Debug, Clone)]
pub struct User {
    pub id: u32,
    pub name: String,
}

#[derive(Debug)]
pub struct UserData {
    pub users: Vec<User>,
}

const RECORD_SIZE: usize = 72;
const NAME_OFFSET: usize = 11;
const NAME_MAX_LEN: usize = 24;
const ID_OFFSET: usize = 48;
const ID_MAX_LEN: usize = 10;

pub fn parse_user_data<P>(filename: P) -> io::Result<UserData>
where
    P: AsRef<Path>,
{
    let bytes = fs::read(filename)?;
    let mut users = Vec::new();

    let mut i = 0;
    while i + RECORD_SIZE <= bytes.len() {
        // Extract name (null-terminated string at offset 11)
        let name_start = i + NAME_OFFSET;
        let name_bytes = &bytes[name_start..name_start + NAME_MAX_LEN];

        // Find the null terminator
        let name_end = name_bytes
            .iter()
            .position(|&b| b == 0)
            .unwrap_or(NAME_MAX_LEN);

        if let Ok(name) = std::str::from_utf8(&name_bytes[..name_end]) {
            let name = name.trim();

            if !name.is_empty() {
                // Extract ID (ASCII string at offset 48)
                let id_start = i + ID_OFFSET;
                let id_bytes = &bytes[id_start..id_start + ID_MAX_LEN];

                // Find the null terminator or non-digit
                let id_end = id_bytes
                    .iter()
                    .position(|&b| b == 0 || !b.is_ascii_digit())
                    .unwrap_or(ID_MAX_LEN);

                if let Ok(id_str) = std::str::from_utf8(&id_bytes[..id_end])
                    && let Ok(id) = id_str.parse::<u32>()
                {
                    users.push(User {
                        id,
                        name: name.to_string(),
                    });
                }
            }
        }

        i += RECORD_SIZE;
    }

    Ok(UserData { users })
}
