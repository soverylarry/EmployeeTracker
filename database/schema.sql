drop database if exists Employee;
create database Employee;
use Employee;

create table Department(
    id integer unsigned auto_increment primary key,
    name varchar(30)
);

create table Role (
    id integer unsigned auto_increment primary key,
    title varchar(30),
    salary decimal,
    department_id integer unsigned,
    index dep_id(department_id),
    constraint foreign_department foreign key (department_id) references department (id)
);

create table Employee (
    id integer unsigned auto_increment primary key,
    first_name varchar(30),
    last_name varchar(30),
    role_id integer unsigned,
    INDEX role_index(role_id),
    constraint foreign_role foreign key (role_id) references role(id),
    manager_id integer unsigned,
    INDEX manager_index (manager_id),
    constraint foreign_manager foreign key (manager_id) references employee(id)
);

INSERT INTO department(name)
VALUES ("propulsion"),
    ("launchpad"),
    ("flight_tracking"),
    ("spacex");
insert into role (title, salary, department_id)
VALUES ("ChiefEngineer", 100000, 4),
    ("Astronaut", 90000, 1),
    ("Technician", 50000, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Elon", "Musk", 1, 1),
    ("Gwynn", "Shotwell", 2, NULL),
    ("Guenter", "Wendt", 3, NULL)