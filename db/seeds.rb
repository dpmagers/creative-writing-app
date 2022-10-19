puts "🌱 Seeding spices..."

Classroom.destroy_all
User.destroy_all
Remember.destroy_all
RememberTag.destroy_all
Tag.destroy_all


# Classroom

c1 = Classroom.create(class_name: "Introduction to Poetry", location: "Lincoln 204", meeting_times: "MWF 10:00-10:50")
c2 = Classroom.create(class_name: "Intermediate Creative Non-Fiction", location: "Stevenson 103" , meeting_times: "TTH 9-10:15")
c3 = Classroom.create(class_name: "Introduction to Poetry", location: "Taft 301", meeting_times: "Friday 2:00")


# User

# CLASSROOM INSTRUCTORS
u1 = User.create(username: "annak", password: "annak123", classroom_id: 1, full_name: "Anna Korn", is_instructor: true, admin: true)
u2 = User.create(username: "nola81", password: "nola1981", classroom_id: 2, full_name: "Norah May", is_instructor: true, admin: true)
u3 = User.create(username: "morodall", password_digest: "molloybk", classroom_id: 3, full_name: "Dan Moore", is_instructor: true, admin: true)

# CLASSROOM 1 STUDENTS
u4 = User.create(username: "vfoye00", password: "foye2000", classroom_id: 1, full_name: "Velma Foye", is_instructor: false, admin: false)
u5 = User.create(username: "mmounty", password: "mountain01", classroom_id: 1, full_name: "Mark Mountain", is_instructor: false, admin: false)
u6 = User.create(username: "gporter", password: "porter99", classroom_id: 1, full_name: "Gary Porter", is_instructor: false, admin: false)
u7 = User.create(username: "amyland", password: "amyagain01", classroom_id: 1, full_name: "Amy Kriebel", is_instructor: false, admin: false)
u8 = User.create(username: "cadenairi", password: "pokelife", classroom_id: 1, full_name: "Irizarry Cadena", is_instructor: false, admin: false)
u9 = User.create(username: "nazcerv", password: "nazzynai", classroom_id: 1, full_name: "Nazario Cervantes", is_instructor: false, admin: false)

# CLASSROOM 2 STUDENTS
u10 = User.create(username: "cbabb1", password: "babbybab", classroom_id: 2, full_name: "Christina Babb", is_instructor: false, admin: false)
u11 = User.create(username: "danimoss", password: "moss1999", classroom_id: 2, full_name: "Danielle Moss", is_instructor: false, admin: false)

# CLASSROOM 3 STUDENTS
u12 = User.create(username: "dkent01", password: "kentkent", classroom_id: 3, full_name: "Danny Kent", is_instructor: false, admin: false)
u13 = User.create(username: "bdenny2", password: "bd2000cool", classroom_id: 3, full_name: "Bobby Denny", is_instructor: false, admin: false)



# Tag

    t1 = Tag.create(name: "Covid")
    t2 = Tag.create(name: "Jobs")
    t3 = Tag.create(name: "School")
    t4 = Tag.create(name: "Family")
    t5 = Tag.create(name: "Friends")



# Remember


# classroom 1
r1 = Remember.create(user_id: u4.id, set_to_private: false, text: "I remember in my high school letter jacket (for debate!).")
r2 = Remember.create(user_id: u4.id, set_to_private: false, text: "I remember passing Claire Danes on the street in New York during our senior trip.")
r3 = Remember.create(user_id: u4.id, set_to_private: false, text: "I remember being too depressed during the first April of covid that I couldn't do homework at all.")
r4 = Remember.create(user_id: u4.id, set_to_private: false, text: "I remember DONT TOUCH ANY SURFACE.")
r5 = Remember.create(user_id: u4.id, set_to_private: true, text: "I remember seeing US Airways Flight 1549 submerged in the Hudson River from the window of my office building.")

r6 = Remember.create(user_id: u5.id, set_to_private: false, text:  "I remember being unemployed, reading manga all day.")
r7 = Remember.create(user_id: u5.id, set_to_private: false, text: "I remember feeling embarrassed reading Shakesspeare out loud in the classroom.")
r8 = Remember.create(user_id: u5.id, set_to_private: false, text: "I remember seeing my apartment in a meme on instagram during covid.")
r9 = Remember.create(user_id: u5.id, set_to_private: true, text: "I remember my first library card years at the library where I got my first job.")
r10 = Remember.create(user_id: u5.id, set_to_private: false, text: "I remember getting paid minimum wage at my first job (shelving books at the library.")

r11 = Remember.create(user_id: u6.id, set_to_private: false, text: "I remember -I do not know- was the wrong answer when I was a stockboy at Walmart.")
r12 = Remember.create(user_id: u6.id, set_to_private: true, text: "I remember the first sunrise I ever saw: coming over Lake Michigan.")
r13 = Remember.create(user_id: u6.id, set_to_private: false, text: "I remember my dad teaching me how to drive")
r14 = Remember.create(user_id: u6.id, set_to_private: false, text: "I remember my dad teaching me to tie a tie")
r15 = Remember.create(user_id: u6.id, set_to_private: false, text: "I remember dancing crazy in the front yard of my friend Steve at his 7th grade birthday party.")

r16 = Remember.create(user_id: u7.id, set_to_private: false, text: "I remember ipsum dolor sit amet, consectetur adipiscing elit.")
r17 = Remember.create(user_id: u7.id, set_to_private: false, text: "I remember do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
r18 = Remember.create(user_id: u7.id, set_to_private: true, text: "I remember ut enim ad minim veniam.")
r19 = Remember.create(user_id: u7.id, set_to_private: false, text: "I remember quis nostrud exercitation ullamco laboris.")
r20 = Remember.create(user_id: u7.id, set_to_private: false, text: "I remember duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")


# classroom 2
r21 = Remember.create(user_id: u8.id, set_to_private: false, text: "I remember ipsum dolor sit amet, consectetur adipiscing elit.")
r22 = Remember.create(user_id: u8.id, set_to_private: false, text: "I remember duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")
r23 = Remember.create(user_id: u8.id, set_to_private: true, text: "I remember excepteur sint occaecat cupidatat non proident.")
r24 = Remember.create(user_id: u8.id, set_to_private: false, text: "I remember sunt in culpa qui officia deserunt mollit anim id est laborum.")
r25 = Remember.create(user_id: u8.id, set_to_private: false, text: "I remember quis nostrud exercitation ullamco laboris.")

r26 = Remember.create(user_id: u9.id, set_to_private: false, text: "I remember do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
r27 = Remember.create(user_id: u9.id, set_to_private: true, text: "I remember nisi ut aliquip ex ea commodo consequat.")
r28 = Remember.create(user_id: u9.id, set_to_private: false, text: "I remember sunt in culpa qui officia deserunt mollit anim id est laborum.")
r29 = Remember.create(user_id: u9.id, set_to_private: false, text: "I remember lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
r30 = Remember.create(user_id: u9.id, set_to_private: false, text: "I remember duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")

# classroom 3
r31 = Remember.create(user_id: u10.id, set_to_private: false, text: "I remember ut enim ad minim veniam.")
r32 = Remember.create(user_id: u10.id, set_to_private: false, text: "I remember excepteur sint occaecat cupidatat non proident.")
r33 = Remember.create(user_id: u10.id, set_to_private: false, text: "I remember sunt in culpa qui officia deserunt mollit anim id est laborum.")
r34 = Remember.create(user_id: u10.id, set_to_private: false, text: "I remember lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
r35 = Remember.create(user_id: u10.id, set_to_private: true, text: "I remember nisi ut aliquip ex ea commodo consequat.")

r36 = Remember.create(user_id: u11.id, set_to_private: false, text: "I remember nisi ut aliquip ex ea commodo consequat.")
r37 = Remember.create(user_id: u11.id, set_to_private: false, text: "I remember sunt in culpa qui officia deserunt mollit anim id est laborum.")
r38 = Remember.create(user_id: u11.id, set_to_private: false, text: "I remember ut enim ad minim veniam.")
r39 = Remember.create(user_id: u11.id, set_to_private: true, text: "I remember excepteur sint occaecat cupidatat non proident.")
r40 = Remember.create(user_id: u11.id, set_to_private: false, text: "I remember quis nostrud exercitation ullamco laboris.")




    # REMEMBER_TAG

rt1 = RememberTag.create(remember_id: r1.id, tag_id: t3.id)
rt2 = RememberTag.create(remember_id: r2.id, tag_id: t3.id)
rt3 = RememberTag.create(remember_id: r3.id, tag_id: t1.id)
rt4 = RememberTag.create(remember_id: r4.id, tag_id: t1.id)
rt5 = RememberTag.create(remember_id: r5.id, tag_id: t2.id)
rt6 = RememberTag.create(remember_id: r6.id, tag_id: t2.id)
rt7 = RememberTag.create(remember_id: r7.id, tag_id: t3.id)
rt8 = RememberTag.create(remember_id: r8.id, tag_id: t1.id)
rt9 = RememberTag.create(remember_id: r9.id, tag_id: t2.id)
rt10 = RememberTag.create(remember_id: r10.id, tag_id: t2.id)

rt11 = RememberTag.create(remember_id: r11.id, tag_id: t2.id)
rt12 = RememberTag.create(remember_id: r12.id, tag_id: t3.id)
rt13 = RememberTag.create(remember_id: r13.id, tag_id: t4.id)
rt14 = RememberTag.create(remember_id: r14.id, tag_id: t4.id)
rt15 = RememberTag.create(remember_id: r15.id, tag_id: t5.id)

rt16 = RememberTag.create(remember_id: r16.id, tag_id: t1.id)
rt17 = RememberTag.create(remember_id: r17.id, tag_id: t2.id)
rt18 = RememberTag.create(remember_id: r18.id, tag_id: t3.id)
rt19 = RememberTag.create(remember_id: r19.id, tag_id: t4.id)
rt20 = RememberTag.create(remember_id: r20.id, tag_id: t5.id)

rt21 = RememberTag.create(remember_id: r21.id, tag_id: t1.id)
rt22 = RememberTag.create(remember_id: r22.id, tag_id: t2.id)
rt23 = RememberTag.create(remember_id: r23.id, tag_id: t3.id)
rt24 = RememberTag.create(remember_id: r24.id, tag_id: t4.id)
rt25 = RememberTag.create(remember_id: r25.id, tag_id: t5.id)

rt26 = RememberTag.create(remember_id: r26.id, tag_id: t1.id)
rt27 = RememberTag.create(remember_id: r27.id, tag_id: t2.id)
rt28 = RememberTag.create(remember_id: r28.id, tag_id: t3.id)
rt29 = RememberTag.create(remember_id: r29.id, tag_id: t4.id)
rt30 = RememberTag.create(remember_id: r30.id, tag_id: t5.id)

rt31 = RememberTag.create(remember_id: r31.id, tag_id: t1.id)
rt32 = RememberTag.create(remember_id: r32.id, tag_id: t2.id)
rt33 = RememberTag.create(remember_id: r33.id, tag_id: t3.id)
rt34 = RememberTag.create(remember_id: r34.id, tag_id: t4.id)
rt35 = RememberTag.create(remember_id: r35.id, tag_id: t5.id)

rt36 = RememberTag.create(remember_id: r36.id, tag_id: t1.id)
rt37 = RememberTag.create(remember_id: r37.id, tag_id: t2.id)
rt38 = RememberTag.create(remember_id: r38.id, tag_id: t3.id)
rt39 = RememberTag.create(remember_id: r39.id, tag_id: t4.id)
rt40 = RememberTag.create(remember_id: r40.id, tag_id: t5.id)

rt41 = RememberTag.create(remember_id: r3.id, tag_id: t3.id)


    puts "Done seeding!"
