import json

# user defined packages
from .import objects
from .import utils


def create_new_user(db, data):
    """

    :param db: type object
    :param data: type dict
    :return: str
    """
    if not isinstance(data, dict):
        data = json.loads(data)
    # step one verify if user already exist
    email = data["email"]
    user_data = get_user_data(db=db, email=email)
    if len(user_data):
        return "duplicate"
    else:
        # step two create account and send email
        set_user_data(db=db, data=data)
        utils.send_email(to_email=email, subject="Welcome to our website!", content="You account has been created!")
        return "success"


def verify_login(db, data):
    """
    verify user log in success
    :param db: type object
    :param data: type dict
    :return: str
    """
    if not isinstance(data, dict):
        data = json.loads(data)
    email = data["email"]
    password = data["password"]
    user_data = get_user_data(db=db, email=email)
    if email == user_data["email"] and password == user_data["password"]:
        return "success"
    return "fail"


def retrieve_password(db, email):
    """
    enter email, then send password to the email
    :param db: type object
    :param email: type str
    :return: str
    """
    user_data = get_user_data(db=db, email=email)
    if len(user_data):
        password = user_data["password"]
        utils.send_email(to_email=email, subject="Retrieve password.", content="Your password is {}".format(password))
    return "success"

def get_user_data(db, email):
    """
    get user data from database
    :param db: type object
    :param email: type str
    :return: dict
    """
    query = "select * from user where email = {lq}{email}{rq}".format(email=email,
                                                                      lq="'",
                                                                      rq="'")
    print("getting user with query", query)
    rows = db.basic_getter(query=query)
    result = {}
    if len(rows):
        row = rows[0]
        print(row)
        row = [str(x) for x in row]
        user = objects.User(id=row[0],
                            username=row[1],
                            email=row[2],
                            last_name=row[3],
                            first_name=row[4],
                            phone_number=row[5],
                            register_date=row[8],
                            manage=row[7],
                            password=row[6])

        result = user.__dict__
    return result


def set_user_data(db, data):
    """
    set user data to database
    :param db: type object
    :param data: type dict
    :return: dict
    """
    if not isinstance(data, dict):
        data = json.loads(data)
        print(data)
    username = data["username"]
    email = data["email"]
    last_name = data["last_name"]
    first_name = data["first_name"]
    phone_number = data["phone_number"]
    password = data["password"]
    manage = "NULL"
    register_date = data["register_date"]
    query = "INSERT INTO user (username, email, last_name, first_name, phone_number, password, manage, register_date) " \
                "VALUES ({l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r}, {l}{}{r});"\
            .format(username, email, last_name,first_name, phone_number, password, manage, register_date, l="'", r="'")
    print("query:\n", query)
    result = db.basic_setter(query=query)
    return str(result)
