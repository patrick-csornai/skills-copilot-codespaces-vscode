function skillsMember() {
    var member = {
        name: "Luis",
        age: 29,
        skills: ["HTML", "CSS", "JavaScript"],
        showSkills: function() {
            console.log("Skills: " + this.skills.join(", "));
        }
    };
    member.showSkills();
}