from flask import Flask, jsonify, request
import uuid
from flask_cors import CORS
from functools import wraps
import pymysql

app = Flask(__name__)
cors=CORS(app)
employees = [
    {
    'id' : "1",
    "name" : "Krishi",
    "position" : "SDYE",
    "salary" : "2100",
    },
    {
    'id' : "2",
    "name" : "Yash",
    "position" : "ASDE",
    "salary" : "2109010",
    },
    {
    'id' : "3",
    "name" : "Aditya",
    "position" : "SDEE",
    "salary" : "21001000",
    },
    {
    'id' : "4",
    "name" : "mukund",
    "position" : "SDE",
    "salary" : "2100110",
    },
    {
    'id' : "5",
    "name" : "vinay",
    "position" : "web",
    "salary" : "2100100",
    }
]
@app.route('/employees', methods=['GET'])
def get_employees():
    conn=pymysql.connect(host='localhost',user='root',password='',db='employee')
    return jsonify(employees)

@app.route('/employees/<employee_id>', methods=['GET'])
def get_employee(employee_id):
    for employee in employees:
        if employee['id'] == employee_id:
            return jsonify(employee)
    return jsonify({'message': 'Employee not found'})
@app.route('/employees', methods=['POST'])
def create_employee():
    conn=pymysql.connect(host='localhost',user='root',password='',db='bookstore')

    raw_json=request.get_json()
    emp_id=raw_json['emp_id']
    emp_name=raw_json['bk_name']
    
    salary=raw_json['salary']
    type=raw_json['type']

    sql=f"INSERT INTO employee_details (emp_id , emp_name , salary) VALUES('"+emp_id+"', '"+emp_name+"','"+salary+"','"+type+"')"
    cur=conn.cursor()

    data = request.get_json()
    employee = {
        'id': str(uuid.uuid4()),
        'name': data['name'],
        'position': data['position'],
        'salary': data['salary']
    }
    employees.append(employee)
    return jsonify(employee)

@app.route('/employees/<employee_id>', methods=['PUT'])
def update_employee(employee_id):
    data = request.get_json()
    for employee in employees:
        if employee['id'] == employee_id:
            employee['name'] = data['name']
            employee['position'] = data['position']
            employee['salary'] = data['salary']
            return jsonify(employee)
    return jsonify({'message': 'Employee not found'})

@app.route('/employees/<employee_id>', methods=['DELETE'])
def delete_employee(employee_id):
    for employee in employees:
        if employee['id'] == employee_id:
            employees.remove(employee)
            return jsonify({'message': 'Employee deleted'})
    return jsonify({'message': 'Employee not found'})

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=int("1234"),debug=True)
