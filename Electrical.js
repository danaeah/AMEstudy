
function startElecTest() {
    var weeklists = getElecLists()
    questionCount = 47; //change if you want more
    currentQuestion = 0;
    seconds = 0;
    questions = [];

    for (var i = 0; i < questionCount; i++) {
        questions.push(newElecQuestion(weeklists)) //contains all qs
    }

    nextQuestion();
    $("#test").show();
    $("#results").hide();
    $(".info").hide();
    $("#summary").hide();

    startTimer();
}

function getElecLists() {
    // [["question1", image1, [answer1,... potentially multiple answers]], ["question2", image2, [answer, answer, answer]], etc]
    var week1 = []
    var week2 = [
        ["What is 1/1,000 as a prefix?", "", ["m"]],
        ["What is 1/1,000,000 as a prefix?", "", ["u"]],
        ["What is 1,000,000 as a prefix?", "", ["M"]],
        ["What is 1,000 as a prefix?", "", ["k"]],
        ["Matter is anything that has ____ and ____", "", ["mass", "volume"]],
        ["Atoms are composed of ____ (+), ____(-), and ____", "", ["protons", "electrons", "neutrons"]],
        ["Protons and neutrons determine the overall ____ of the atom", "", ["weight"]],
        ["Like charges ____, opposite charges ____", "", ["repel", "attract"]],
        ["Free electrons can be easily ____ from the nucleus", "", ["dislodged"]],
        ["Free electrons are found on the ____ shell", "", ["valence"]],
        ["Flow of electrons in an electrical circuit is called ____", "", ["current"]],
        ["An element cannot be ____ to a simpler form", "", ["reduced"]],
        ["An element is made from one type of ____", "", ["atom"]],
        ["An atom with one free electron is a ____", "", ["conductor"]],
        ["An atom with 4 free electrons is a __-____", "", ["semi", "conductor"]],
        ["An atom with 8 free electrons is a ____", "", ["resistor"]],
        ["A ____ is a unit of electrical charge", "", ["couloumb"]],
        ["one ____ passing through one point in one second means that circuit has one amp", "", ["coulomb"]],
        ["Movement of charges is called a ____", "", ["current"]],
        ["Current flows from ____ to ____", "", ["negative", "positive"]],
        ["Resistance is a material's resistance to ____ flow", "", ["current"]],
        ["Resistance is determined by four properties:", "", ["material", "length", "cross section area", "temperature"]],
        ["The resistance of a metallic conductor is ____ proportional to its length (directly/inversely)", "", ["directly"]],
        ["As temperature increases, resistance ____", "", ["increases"]],
        ["As cross section area of a wire increases, resistance ____", "", ["decreases"]],
        ["As resistance increases, AWG number ____", "", ["increases"]],
        ["One ____ is the amount of power used to move 1 amp of current under a force of 1 volt", "", ["watt"]],
        ["Variation between marked value and actual value of a resistor is known as ____", "", ["tolerance"]],
        ["EMF stands for:", "", ["electro", "motive", "force"]],
        ["The common quantity in a series circuit is ____", "", ["current"]],
        ["The common quantity in a parallel circuit is ____", "", ["voltage"]],
        ["____ circuits are used for voltage dividers (series/parallel)", "", ["series"]],
        ["The voltage across each ___ must be exactly the same voltage supplied by the ____ (Kirchoff's voltage law", "", ["load", "source"]],
        ["The current going into one point must be ____ to the current going out of it (Kirchoff's current law)", "", ["equal"]],
        ["The magnetic field consists of lines of ____", "", ["flux"]],
        ["More lines of flux makes a magnet ____ (stronger/weaker)", "", ["stronger"]],
        ["Permanent magnets ____ their magnetism once magnetizing force has been removed", "", ["retain"]],
        ["Temporary magnets ____ their magnetism once magnetizing force has been removed", "", ["lose"]],
        ["To increase strength of magnetic field, you can: increase current by increasing ____; increase the number of ____; or place a soft iron ____ in the center.", "", ["voltage", "loops", "core"]],
        ["The opposition to magnetic flux in a material is called:", "", ["reluctance"]],
        ["The ability of a magnet to retain its magnetism is known as:", "", ["retentivity"]],
        ["Like poles ____ each other and unlike poles ____ each other", "", ["repel", "attract"]],
        ["Lines of flux can more easily go through: (soft iron core/air)", "", ["soft iron core"]],
        ["Electrons moving through wire create a magnetic field around the ____", "", ["conductor"]],
        ["Hand used for hand rules: (left/right)", "", ["left"]],
        ["If you grasp a conductor with your left hand wrapped in the same direction as the magnetic field, your thumb will point in the direction of the ____", "", ["current"]],
        ["If you grasp a coil with your left hand with your fingers curved in the direction of electron flow, your thumb will point in the direction of the ____ ____", "", ["north pole"]],
        ]
    var week3 = []
    //return [week1, week2, week3].flat() //puts all items into one big list
    return week2
}

function newElecQuestion(weeklists) {
    // pick a random question from the list of questions
    const randomIndex = Math.floor(Math.random() * weeklists.length);
    removedItem = weeklists[randomIndex]

    return {
        question: removedItem[0],
        image: removedItem[1],
        answer: removedItem[2], //contains another list
    }
}