drop database if exists Employee;
create database Employee;
use Employee;

create table Department(
    id integer unsigned auto_increment  primary key,
    name varchar(30)
);

create table Role (
    id integer unsigned auto_increment  primary key,
    title varchar(30),
    salary decimal,
    department_id integer unsigned,
    index dep_id(department_id),
    constraint foreign_department foreign key (department_id) references department (id)
);

create table Employee (
    id integer unsigned auto_increment  primary key,
    name varchar(30),
    last_name varchar(30),
    role_id integer unsigned,
    INDEX role_index(role_id),
    constraint foreign_role foreign key (role_id) references role(id),
    manager_id integer unsigned,
    INDEX manager_index (manager_id),
    constraint foreign_manager foreign key (manager_id) references employee(id)
);