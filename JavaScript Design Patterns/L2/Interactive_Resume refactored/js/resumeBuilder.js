/** ======== Old Code ========**/

//var formattedName = HTMLheaderName.replace("%data%", name);
/*
var bio = {
    "name" : "Kishor",
    "role" : "Web Developer",
    "contacts" : {
        "mobile": "773-785-0385",
        "email": "devkishorbwr@gmail.com",
        "github": "kishorchouhan",
        "twitter": "@kishorchouhan19",
        "location": "Rajasthan, India"
    },
    "welcomeMessage" : "Hello! I'm a Front-End Developer. Thanks for stopping by!",
    "skills" : ["HTML", "CSS", "JS", "Python"],
    "bioPic" : "images/pic.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
    
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").prepend(formattedLocation);
        $("#topContacts").prepend(formattedTwitter);
        $("#topContacts").prepend(formattedGithub);
        $("#topContacts").prepend(formattedEmail);
        $("#topContacts").prepend(formattedMobile);
    
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);
        
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            
            bio.skills.forEach(function(skill) {
                var formattedSkill = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkill);
            });
        };
    }
};

bio.display();

var work = {
    "jobs": [/*{
        "employer": "Election Department of Beawar",
        "title": "Computer Operator",
        "location": "Beawar",
        "dates": "2018",
        "description": "Worked as an computer operator."
    }*//*],
    "display": function() {
        //replaced "for (job in work.jobs)" with normal for.
        for (var i = 0; i < work.jobs.length; i++) {
            // create new div for work experience
            $("#workExperience").append(HTMLworkStart);
            // concat employer and title
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
    
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedDates);
    
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedDescription);
        };
    }
};

work.display();

var projects = {
    "projects": [{
        "title": "Online Resume",
        "dates": "2019",
        "description": "Created an online Interactive Resume as part of Final Project#2 of Udacity's Front-End Web Developer Nanodegree.",
        "images": ["images/resume.png"]
    },
    {
        "title": "Online Portfolio",
        "dates": "2019",
        "description": "Created an online portfolio of work as part of Final Project#1 of Udacity's Front-End Web Developer Nanodegree by using HTML, CSS and Bootstrap.",
        "images": ["images/Portfolio_Profile-Kishor.png"]
    },
    {
        "title": "Gamer's Network",
        "dates": "2019",
        "description": "This is a Gamer's Network project,based on python. This was created as part of Final Project in Udacity's Intro to CS course.",
        "images": ["images/Gamers_Network.jpg"]
    },
    {
        "title": "Movie Website",
        "dates": "2019",
        "description": "This is a Movie Website project,based on python. This was created as part of Final Project in Udacity's Programming Foundations with Python course.",
        "images": ["images/Fresh_Tomatoes!.png"]
    },
    {
        "title": "Razer Product Landing Page",
        "dates": "2019",
        "description": "This is a Product Landing Page project based on HTML and CSS. This was created as part of Project in Responsive Web Design Certification course at FreeCodeCamp.",
        "images": ["images/Razer_Product_landing_page.png"]
    },
    {
        "title": "Survey Form",
        "dates": "2019",
        "description": "This is a 'survay form for programmers' project based on HTML and CSS. This was created as part of Project in Responsive Web Design Certification course at FreeCodeCamp.",
        "images": ["images/Survey_Form.png"]
    },
    {
        "title": "Tribute Page",
        "dates": "2019",
        "description": "This was my first project i.e. Tribute Page to Shahid Bhagat Singh. Built using HTML and CSS. This was created as part of Project in Responsive Web Design Certification course at FreeCodeCamp.",
        "images": ["images/Tribute_Page.png"]
    }],
    "display": function() {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
    
            var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
            $(".project-entry:last").append(formattedTitle);
    
            var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
            $(".project-entry:last").append(formattedDates);
    
            var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
            $(".project-entry:last").append(formattedDescription);
    
            if (projects.projects[i].images.length > 0) {
                for (image in projects.projects[i].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};
 
projects.display();

var education = {
    "schools": [
        {
            "name": "Government Engineering College Bikaner",
            "degree": "B.Tech",
            "majors": ["Electrical Engineering"],
            "dates": "2013-2017",
            "location": "Bikaner",
            "url": "http://www.ecb.ac.in"
        }, {
            "name": "Udacity Front End Nanodegree",
            "degree": "Nanodegree",
            "majors": ["Computer Science"],
            "dates": "2019",
            "location": "Mountain View, CA",
            "url": "https://www.udacity.in"
        }
    ],
    "onlineCourses": [
        {
            "title": "Responsive Web Design Certification",
            "school": "FreeCodeCamp",
            "dates": "2019",
            "url": "https://learn.freecodecamp.org/"
        }
    ],
    "display": function() {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
    
            var formattedName = HTMLschoolName.replace("%data%", school.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchoolTitle = formattedName + formattedDegree;
            $(".education-entry:last").append(formattedSchoolTitle);
            var formattedDate = HTMLschoolDates.replace("%data%",school.dates);
            $(".education-entry:last").append(formattedDate);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").prepend(formattedLocation);
            var formattedMajors = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry:last").append(formattedMajors);
        });
        education.onlineCourses.forEach(function(course) {
            $(".education-entry:last").append(HTMLonlineClasses);
            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedCourseTitle = formattedTitle + formattedSchool;
            $(".education-entry:last").append(formattedCourseTitle);
            var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
            $(".education-entry:last").append(formattedDates);
            var formattedURL = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formattedURL);
        });
    }
};

education.display();
*/
/*
$("#main").append(internationalizeButton);
function inName(oldName) {
    var finalName = oldName;
    // My Solution:-
    var firstLetter = finalName[0];
    firstLetter = firstLetter.toUpperCase();
    nameArray = finalName.split(" ");
    nameArray[0] = nameArray[0].toLowerCase();
    nameArray[1] = nameArray[1].toUpperCase();
    finalName = nameArray.join(" ");
    finalName = finalName.replace(finalName[0], firstLetter);
    // course solution:-
    //var names = oldName.split(" ");
    //names[1] = names[1].toUpperCase();
    //names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    //finalName = names.join(" ");
    return finalName;
}
*/

//$("#mapDiv").append(googleMap);

/** ======== Refactored Code ========**/

(function() {

    /* ======== Model ======== */

    var model = {

        bioData: {
            "name": "Kishor",
            "role": "Web Developer",
            "contacts": {
                "mobile": "773-785-0385",
                "email": "devkishorbwr@gmail.com",
                "github": "kishorchouhan",
                "twitter": "@kishorchouhan19",
                "location": "Rajasthan, India"
            },
            "welcomeMessage": "Hi, I'm an Electrical Engineer (Selected for Assistant Loco Pilot in Indian Railway) turned Web Developer because it’s just awesome. I have always been passionate about programming and what it stands for. I am currently involved in the Front End Web Developer Nanodegree program at Udacity and preparing to enter the software Industry. Programming, in my opinion, is a medium to convert thoughts to action and to be creative in solving problems.",
            "skills": ["HTML", "CSS", "JS", "Python"],
            "bioPic": "images/pic.jpg",
        },

        workData: {
            "jobs": [/*
                {"employer": "Election Department of Beawar",
                    "title": "Computer Operator",
                    "location": "Beawar",
                    "dates": "2018",
                    "description": "Worked as an computer operator."}
            */]
        },

        projectData: {
            "projects": [{
                    "title": "Online Resume",
                    "dates": "2019",
                    "description": "Created an online Interactive Resume as part of Final Project#2 of Udacity's Front-End Web Developer Nanodegree.",
                    "images": ["images/resume.png"]
                },
                {
                    "title": "Online Portfolio",
                    "dates": "2019",
                    "description": "Created an online portfolio of work as part of Final Project#1 of Udacity's Front-End Web Developer Nanodegree by using HTML, CSS and Bootstrap.",
                    "images": ["images/Portfolio_Profile-Kishor.png"]
                },
                {
                    "title": "Gamer's Network",
                    "dates": "2019",
                    "description": "This is a Gamer's Network project,based on python. This was created as part of Final Project in Udacity's Intro to CS course.",
                    "images": ["images/Gamers_Network.jpg"]
                },
                {
                    "title": "Movie Website",
                    "dates": "2019",
                    "description": "This is a Movie Website project,based on python. This was created as part of Final Project in Udacity's Programming Foundations with Python course.",
                    "images": ["images/Fresh_Tomatoes!.png"]
                },
                {
                    "title": "Razer Product Landing Page",
                    "dates": "2019",
                    "description": "This is a Product Landing Page project based on HTML and CSS. This was created as part of Project in Responsive Web Design Certification course at FreeCodeCamp.",
                    "images": ["images/Razer_Product_landing_page.png"]
                },
                {
                    "title": "Survey Form",
                    "dates": "2019",
                    "description": "This is a 'survay form for programmers' project based on HTML and CSS. This was created as part of Project in Responsive Web Design Certification course at FreeCodeCamp.",
                    "images": ["images/Survey_Form.png"]
                },
                {
                    "title": "Tribute Page",
                    "dates": "2019",
                    "description": "This was my first project i.e. Tribute Page to Shahid Bhagat Singh. Built using HTML and CSS. This was created as part of Project in Responsive Web Design Certification course at FreeCodeCamp.",
                    "images": ["images/Tribute_Page.png"]
                }
            ]
        },

        educationData: {
            "schools": [{
                "name": "Government Engineering College Bikaner",
                "degree": "B.Tech",
                "majors": ["Electrical Engineering"],
                "dates": "2013-2017",
                "location": "Bikaner",
                "url": "http://www.ecb.ac.in"
            }, {
                "name": "Udacity Front End Nanodegree",
                "degree": "Nanodegree",
                "majors": ["Computer Science"],
                "dates": "2019",
                "location": "Mountain View, CA",
                "url": "https://www.udacity.in"
            }],
            "onlineCourses": [{
                "title": "Responsive Web Design Certification",
                "school": "FreeCodeCamp",
                "dates": "2019",
                "url": "https://learn.freecodecamp.org/"
            }]
        }
    };

    /* ======== Octopus ======== */
    var octopus = {
        init: function() {
            viewBio.init();
            viewWork.init();
            viewProject.init();
            viewEdu.init();
        },
        getBioData: function() {
            return model.bioData;
        },
        getWorkData: function() {
            return model.workData;
        },
        getProjectData: function() {
            return model.projectData;
        },
        getEduData: function() {
            return model.educationData;
        }
    };

    /* ======== View ======== */
    var viewBio = {
        init: function() {
            var dataBio = octopus.getBioData();
            this.formattedName = HTMLheaderName.replace("%data%", dataBio.name);
            this.formattedRole = HTMLheaderRole.replace("%data%", dataBio.role);

            this.formattedMobile = HTMLmobile.replace("%data%", dataBio.contacts.mobile);
            this.formattedEmail = HTMLemail.replace("%data%", dataBio.contacts.email);
            this.formattedGithub = HTMLgithub.replace("%data%", dataBio.contacts.github);
            this.formattedTwitter = HTMLtwitter.replace("%data%", dataBio.contacts.twitter);
            this.formattedLocation = HTMLlocation.replace("%data%", dataBio.contacts.location);

            this.formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", dataBio.welcomeMessage);
            this.formattedBioPic = HTMLbioPic.replace("%data%", dataBio.bioPic);

            viewBio.render();

            if (dataBio.skills.length > 0) {
                $("#header").append(HTMLskillsStart);
                dataBio.skills.forEach(function(skill) {
                    var formattedSkill = HTMLskills.replace("%data%", skill);
                    viewBio.renderSkills(formattedSkill);
                });
            };
        },
        render: function() {
            $("#header").prepend(this.formattedRole);
            $("#header").prepend(this.formattedName);

            $("#topContacts").prepend(this.formattedLocation);
            $("#topContacts").prepend(this.formattedTwitter);
            $("#topContacts").prepend(this.formattedGithub);
            $("#topContacts").prepend(this.formattedEmail);
            $("#topContacts").prepend(this.formattedMobile);

            $("#header").append(this.formattedBioPic);
            $("#header").append(this.formattedWelcomeMsg);
        },
        renderSkills: function(formattedSkill) {
            $("#skills").append(formattedSkill);
        }
    };

    var viewWork = {
        init: function() {
            var dataWork = octopus.getWorkData();
            for (var i = 0; i < dataWork.jobs.length; i++) {
                
                this.formattedEmployer = HTMLworkEmployer.replace("%data%", dataWork.jobs[i].employer);
                this.formattedTitle = HTMLworkTitle.replace("%data%", dataWork.jobs[i].title);
                this.formattedEmployerTitle = this.formattedEmployer + this.formattedTitle;

                this.formattedDates = HTMLworkDates.replace("%data%", dataWork.jobs[i].dates);

                this.formattedDescription = HTMLworkDescription.replace("%data%", dataWork.jobs[i].description);
                viewWork.render();
            };
        },
        render: function() {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(this.formattedEmployerTitle);
            $(".work-entry:last").append(this.formattedDates);
            $(".work-entry:last").append(this.formattedDescription);
        }
    };

    var viewProject = {
        init: function() {
            var dataProject = octopus.getProjectData();
            for (var i = 0; i < dataProject.projects.length; i++) {
                this.formattedTitle = HTMLprojectTitle.replace("%data%",dataProject.projects[i].title);
                this.formattedDates = HTMLprojectDates.replace("%data%",dataProject.projects[i].dates);
                this.formattedDescription = HTMLprojectDescription.replace("%data%",dataProject.projects[i].description);
                
                if (dataProject.projects[i].images.length > 0) {
                    for (image in dataProject.projects[i].images) {
                        var formattedImage = HTMLprojectImage.replace("%data%",dataProject.projects[i].images[image]);
                        viewProject.renderProjectImg(formattedImage);
                    };
                };
                viewProject.render();
            };
        },
        render: function() {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(this.formattedTitle);
            $(".project-entry:last").append(this.formattedDates);
            $(".project-entry:last").append(this.formattedDescription);
        },
        renderProjectImg: function(formattedImage) {
            $(".project-entry:last").append(formattedImage);
        }
    };

    var viewEdu = {
        init: function() {
            this.dataEdu = octopus.getEduData();

            viewEdu.renderSchools();            
            viewEdu.renderOnlineCourses();
        },
        renderSchools: function() {
            this.dataEdu.schools.forEach(function(school) {
                $("#education").append(HTMLschoolStart);
        
                var formattedName = HTMLschoolName.replace("%data%", school.name);
                var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
                var formattedSchoolTitle = formattedName + formattedDegree;
                $(".education-entry:last").append(formattedSchoolTitle);
                var formattedDate = HTMLschoolDates.replace("%data%",school.dates);
                $(".education-entry:last").append(formattedDate);
                var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
                $(".education-entry:last").prepend(formattedLocation);
                var formattedMajors = HTMLschoolMajor.replace("%data%", school.majors);
                $(".education-entry:last").append(formattedMajors);
            });
        },
        renderOnlineCourses: function() {
            this.dataEdu.onlineCourses.forEach(function(course) {
                $(".education-entry:last").append(HTMLonlineClasses);
                var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
                var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
                var formattedCourseTitle = formattedTitle + formattedSchool;
                $(".education-entry:last").append(formattedCourseTitle);
                var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
                $(".education-entry:last").append(formattedDates);
                var formattedURL = HTMLonlineURL.replace("%data%", course.url);
                $(".education-entry:last").append(formattedURL);
            });
        }
    };

    octopus.init();

})();

$("#mapDiv").append(googleMap);