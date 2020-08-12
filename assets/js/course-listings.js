$Lightning.use("c:LOApp", function() {
    $Lightning.createComponent(
        "c:listCourses",
        { courseType : "AIM" },
        "auraLightning",
        function(cmp) {
            console.log("Aura component was created");
        }
    );

    $Lightning.createComponent(
        "c:lwcListCourses",
        { courseType : "GLAD" },
        "lwcLightning",
        function(cmp) {
            console.log("LWC component was created");
        }
    );

    $Lightning.createComponent(
        "c:trainingLog",
        {},
        "trainingRegistration",
        function(cmp) {
            console.log("TrainingRegistration Yo");
        }
    );
}, 'https://sandbox-dlenm-registration1-developer-edition.cs77.force.com/registration');