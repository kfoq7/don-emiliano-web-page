// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use std::fs;
use std::path::Path;

use serde_json::json;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn read_file_in(path: String) -> Result<String, String> {
    use serde_json::json;

    let file_path = Path::new(&path);
    let bytes = fs::read(file_path).map_err(|e| format!("failed to read file: {}", e))?;

    let hex = bytes
        .iter()
        .map(|b| format!("{:02x}", b))
        .collect::<Vec<_>>()
        .join(" ");

    let bytes_updated: Vec<u8> = hex
        .split_whitespace()
        .map(|s| u8::from_str_radix(s, 16).unwrap())
        .collect();

    let mut names = Vec::new();
    let mut current_name = Vec::new();

    for &b in &bytes_updated {
        if b.is_ascii_alphabetic() {
            current_name.push(b);
        } else {
            if current_name.len() >= 3 {
                if let Ok(name) = String::from_utf8(current_name.clone()) {
                    names.push(name);
                }
            }

            current_name.clear();
        }
    }

    serde_json::to_string(&json!({ "users": names }))
        .map_err(|e| format!("failed to serialize to JSON: {}", e))
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, read_file_in])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
