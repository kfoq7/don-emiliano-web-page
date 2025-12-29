use attendance_reader::parser::user::parse_user_data;

fn main() {
    match parse_user_data("data/user.dat") {
        Ok(user_data) => {
            println!("Parsed {} users:", user_data.users.len());
            for user in &user_data.users {
                println!("ID: {:3}, Name: {}", user.id, user.name);
            }
        }
        Err(e) => eprintln!("Error reading file: {}", e),
    }
}

// fn main() -> io::Result<()> {
//     let path = "./data/NYU7244800354_attlog.dat";
//     let lines = read_lines(path)?;
//
//     for line in lines.map_while(Result::ok) {
//         println!("{}", line);
//     }
//
//     //     Ok(())
//     }

// fn read_lines<P>(filename: P) -> io::Result<io::Lines<io::BufReader<fs::File>>>
// where
//     P: AsRef<Path>,
// {
//     let file = fs::File::open(filename)?;
//     Ok(io::BufReader::new(file).lines())
// }
