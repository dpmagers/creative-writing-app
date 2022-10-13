puts "🌱 Seeding spices..."

# User.destroy_all
# Classroom.destroy_all
# Tag.destroy_all


# Classroom
# class_name (str)
# location (str)
# meeting_times (str)
c1 = Classroom.create(class_name: "Introduction to Poetry", location: "Lincoln 204", meeting_times: "MWF 10:00-10:50")
c2 = Classroom.create(class_name: "Intermediate Creative Non-Fiction", location: "Stevenson 103" , meeting_times: "TTH 9-10:15")
c3 = Classroom.create(class_name: "Introduction to Poetry", location: "Taft 301", meeting_times: "Friday 2:00")

# Tag
# name (str)
t1 = Tag.create(name: "Covid")
t2 = Tag.create(name: "Jobs")
t3 = Tag.create(name: "School")


# User
# username (str)
# password_digest (str)
# classroom_id (int)
# full_name (str)
# is_instructor (Boolean)
# CLASSROOM INSTRUCTORS
u1 = User.create(username: "annak", password: "annak123", classroom_id: 1, full_name: "Anna Korn", is_instructor: true)
u2 = User.create(username: "nola81", password: "nola1981", classroom_id: 2, full_name: "Norah May", is_instructor: true)
u3 = User.create(username: "morodall", password: "molloybk", classroom_id: 3, full_name: "Dan Moore", is_instructor: true)

# CLASSROOM 1 STUDENTS
u4 = User.create(username: "vfoye00", password: "foye2000", classroom_id: 1, full_name: "Velma Foye", is_instructor: false)
u5 = User.create(username: "mmounty", password: "mountain01", classroom_id: 1, full_name: "Mark Mountain", is_instructor: false)
u6 = User.create(username: "gporter", password: "porter99", classroom_id: 1, full_name: "Gary Porter", is_instructor: false)
u7 = User.create(username: "amyland", password: "amyagain01", classroom_id: 1, full_name: "Amy Kriebel", is_instructor: false)
u8 = User.create(username: "cadenairi", password: "pokelife", classroom_id: 1, full_name: "Irizarry Cadena", is_instructor: false)
u9 = User.create(username: "nazcerv", password: "nazzynai", classroom_id: 1, full_name: "Nazario Cervantes", is_instructor: false)

# CLASSROOM 2 STUDENTS
u10 = User.create(username: "cbabb1", password: "babbybab", classroom_id: 2, full_name: "Christina Babb", is_instructor: false)
u11 = User.create(username: "danimoss", password: "moss1999", classroom_id: 2, full_name: "Danielle Moss", is_instructor: false)

# CLASSROOM 3 STUDENTS
u12 = User.create(username: "dkent01", password: "kentkent", classroom_id: 2, full_name: "Danny Kent", is_instructor: false)
u13 = User.create(username: "bdenny2", password: "bd2000cool", classroom_id: 2, full_name: "Bobby Denny", is_instructor: false)

# Remember
# user_id (int)
# set_to_private (Boolean)
# text (str)

# classroom 1
r1 = Remember.create(user_id: u4.id, set_to_private: false, text: "")
r2 = Remember.create(user_id: u4.id, set_to_private: false, text: "")
r3 = Remember.create(user_id: u4.id, set_to_private: false, text: "")
r4 = Remember.create(user_id: u4.id, set_to_private: false, text: "")
r5 = Remember.create(user_id: u4.id, set_to_private: true, text: "")

r6 = Remember.create(user_id: u5.id, set_to_private: false, text: "")
r7 = Remember.create(user_id: u5.id, set_to_private: false, text: "")
r8 = Remember.create(user_id: u5.id, set_to_private: false, text: "")
r9 = Remember.create(user_id: u5.id, set_to_private: true, text: "")
r10 = Remember.create(user_id: u5.id, set_to_private: false, text: "")

r11 = Remember.create(user_id: u6.id, set_to_private: false, text: "")
r12 = Remember.create(user_id: u6.id, set_to_private: true, text: "")
r13 = Remember.create(user_id: u6.id, set_to_private: false, text: "")
r14 = Remember.create(user_id: u6.id, set_to_private: false, text: "")
r15 = Remember.create(user_id: u6.id, set_to_private: false, text: "")

r16 = Remember.create(user_id: u7.id, set_to_private: false, text: "")
r17 = Remember.create(user_id: u7.id, set_to_private: false, text: "")
r18 = Remember.create(user_id: u7.id, set_to_private: true, text: "")
r19 = Remember.create(user_id: u7.id, set_to_private: false, text: "")
r20 = Remember.create(user_id: u7.id, set_to_private: false, text: "")


# classroom 2
r21 = Remember.create(user_id: u8.id, set_to_private: false, text: "")
r22 = Remember.create(user_id: u8.id, set_to_private: false, text: "")
r23 = Remember.create(user_id: u8.id, set_to_private: true, text: "")
r24 = Remember.create(user_id: u8.id, set_to_private: false, text: "")
r25 = Remember.create(user_id: u8.id, set_to_private: false, text: "")

r26 = Remember.create(user_id: u9.id, set_to_private: false, text: "")
r27 = Remember.create(user_id: u9.id, set_to_private: true, text: "")
r28 = Remember.create(user_id: u9.id, set_to_private: false, text: "")
r29 = Remember.create(user_id: u9.id, set_to_private: false, text: "")
r30 = Remember.create(user_id: u9.id, set_to_private: false, text: "")

# classroom 3
r31 = Remember.create(user_id: u10.id, set_to_private: false, text: "I remember")
r32 = Remember.create(user_id: u10.id, set_to_private: false, text: "I remember")
r33 = Remember.create(user_id: u10.id, set_to_private: false, text: "I remember")
r34 = Remember.create(user_id: u10.id, set_to_private: false, text: "I remember")
r35 = Remember.create(user_id: u10.id, set_to_private: true, text: "I remember")

r36 = Remember.create(user_id: u11.id, set_to_private: false, text: "I remember")
r37 = Remember.create(user_id: u11.id, set_to_private: false, text: "I remember")
r38 = Remember.create(user_id: u11.id, set_to_private: false, text: "I remember")
r39 = Remember.create(user_id: u11.id, set_to_private: true, text: "I remember")
r40 = Remember.create(user_id: u11.id, set_to_private: false, text: "I remember")


