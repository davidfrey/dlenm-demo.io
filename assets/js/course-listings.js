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
}, 'https://sandbox-dlenm-registration1-developer-edition.cs41.force.com/registration');