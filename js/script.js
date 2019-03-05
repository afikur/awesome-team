class Team {
    constructor(name, members) {
        this.name = name;
        this.members = members;
    }

    getSumOfAge() {
        let sum = 0;
        for(let i = 0; i < this.members.length; i++) {
            sum += this.members[i].age;
        }
        
        return sum;
    }

    getAvgAge() {
        let sumOfAges = this.getSumOfAge();
        return sumOfAges / this.members.length;
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let json = $.getJSON( "team.json", function() {
    let team = $.extend(new Team(), json.responseJSON);
   
    let membersHtml = [];

    $('.circle').css('width', team.members.length * 16 + team.members.length * 5  - 5);

    for(let j = 0; j < team.members.length; j++) {
        $('.circle').append('<li style="background: ' + getRandomColor() + '"></li>');
    }

    for(let i = 0; i < team.members.length; i++) {
        console.log(team.members[i].name);
        let member = '<div class="member">' +
                '<img class="photo" src="' + team.members[i].photo + '" alt="">' +
                '<h2>' + team.members[i].name + '</h2>' +
                '<h4>' + team.members[i].designation + '</h4>' +
                '<a href="' + team.members[i].linkedInUrl + '" target="_blank"> ' + 
                    '<img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c528.png" alt="" class="linkedin">' + 
                '</a>' +
            '</div>';
            membersHtml.push(member);
    }

    for(let j = 0; j < membersHtml.length; j++) {
        $('.team-members .container').append(membersHtml[j])
    }
});