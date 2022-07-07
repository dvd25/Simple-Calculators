
let employeeArray = ["Bharath", "Jo", "David", "Courtney", "Jacky", "Riya", "Gareth", "Yasmin", "Sebastian"];
let employeeRoleArray = ["Trainer", "Assistant Trainer", "Intern","Intern","Intern","Intern","Intern","Intern","Intern"]

let employee_obj = {
    name : "Bharath",
    current_location : {'country': 'Australia', 'city': 'Sydney' , 'state': 'NSW'}, 
    previous_jobs :  [{role: "software engineer", company: "telstra", location: "aus"}, {role: "software engineer", company: "google", location: "us", type: "remote"}  ]
}

console.log(employee_obj.previous_jobs[1])