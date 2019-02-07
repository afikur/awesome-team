function Team(name, members) {
    this.name = name;
    this.members = members;
}
 
Team.prototype.getSumOfAge = function() {
   var sum = 0;
   for(var i = 0; i < this.members.length; i++) {
       sum += this.members[i].age;
   }
   
  return sum;
}


Team.prototype.getAvgAge = function() {
    var sumOfAges = this.getSumOfAge();
    return sumOfAges / 2;
}

var json = $.getJSON( "team.json", function() {
    var team = $.extend(new Team(), json.responseJSON);
   
    var membersHtml = [];

    for(var i = 0; i < team.members.length; i++) {
        console.log(team.members[i].name);
        var member = '<div class="member">' +
                '<img class="photo" src="' + team.members[i].photo + '" alt="">' +
                '<h2>' + team.members[i].name + '</h2>' +
                '<h4>' + team.members[i].designation + '</h4>' +
                '<a href="' + team.members[i].linkedInUrl + '" target="_blank"> ' + 
                    '<img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c528.png" alt="" class="linkedin">' + 
                '</a>' +
            '</div>';
            membersHtml.push(member);
    }

    for(var j = 0; j < membersHtml.length; j++) {
        $('.team-members .container').append(membersHtml[j])
    }
});
