
function startEngineTest() {
    var weeklists = getEngineLists()
    questionCount = 5; //change if you want more
    currentQuestion = 0;
    seconds = 0;
    questions = [];

    for (var i = 0; i < questionCount; i++) {
        questions.push(newEngineQuestion(weeklists)) //contains all qs
    }

    nextQuestion();
    $("#test").show();
    $("#results").hide();
    $(".info").hide();
    $("#summary").hide();

    startTimer();
}

function getEngineLists() {
    // [["question1", image1, [answer1,... potentially multiple answers]], ["question2", image2, [answer, answer, answer]], etc]
    var week1 = []
    var week2 = [
        ["Who came up with the concept of a 4 stroke engine? (last name), "", ["otto"]],
        ["Ignition occurs during the ____ stroke", "", ["compression"]],
        ["There is no ____ timing in aircraft", "", ["variable"]],
        ["The intake valve opens (at/before/after) the piston reaches TDC", "", ["before"]],
        ["The intake valve ____ as the piston comes up for compression", "", ["closes"]],
        ["The intake and exhaust valves are both ____ at the end of the exhaust stroke and the beginning of the intake stroke", "", ["open"]],
        ["Heat engines convert ____ energy into ____ energy", "", ["chemical", "mechanical"]],
        ["What changes reciprocal movement into rotational movement?", "", ["crankshaft"]],
        ["The ____ opens and closes valves", "", ["camshaft"]],
        ["The camshaft rotates (twice/half) as fast as the crankshaft", "", ["half"]],
        ["The crankshaft rotates (half/twice) as fast as the camshaft", "", ["twice"]],
        ["For every 2 rotations of the ____ there is 1 rotation of the ____", "", ["crankshaft", "camshaft"]],
        ["How many valves are there per cylinder?", "", ["2"]],
        ["A 6 cylinder engine has 12 lobes (true/false)", "", ["false"]],
        ["A lobe can open and close more than one valve (true/false)", "", ["true"]],
        ["____ _____ is the most common type of engine", "", ["horizontally opposed"]],
        ["Horizontally opposed engine names start with an _", "", ["o"]],
        ["An O-540 engine has a ____ of 540 ____ ____", "", ["volume", "cubic inches"]],
        ["___ ____ is used to break in an engine (type of oil)", "", ["mineral oil"]],
        ["CAE -> SAE ratio is nearly _:_", "", ["2:1"]],
        ["65 CAE is __ SAE", "", ["30"]],
        ["Valve float/valve surge is when springs ____", "", ["resonate"]],
        ["Stop valve surge by using 2 springs that resonate at different ____", "", ["frequencies"]],
        ["____ horsepower is the actual HP", "", ["brake"]],
        ["____ horsepower is the power required to overcome drag in the engine", "", ["friction"]],
        ["____ horsepower is the calculated HP from the equation", "", ["indicated"]],
        ["P in plank stands for effective ____", "", ["pressure"]],
        ["L in plank stands for length of ____", "", ["stroke"]],
        ["A in plank stands for area of ____", "", ["piston"]],
        ["N in plank stands for number of ____ ____ per minute", "", ["power strokes"]],
        ["K in plank stands for number of ____", "", ["cylinders"]],
        ["What is PLANK divided by?", "", ["33000"]],
        ["Power from engine is usually one one (half/third/quarter) of of the IHP", "", ["third"]],
        ["What is the number 1 factor to consider on aircraft engines", "", ["reliability"]],
        ["Length of cylinder is from ___ to ___", "", ["TDC", "BDC"]],
        ["Cylinder head is made from ____", "", ["aluminum"]],
        ["Cylinder barrel is made from ____", "", ["steel"]],
        ["Steel is a metal ____", "", ["alloy"]],
        ["All steel has iron (true/false)", "", ["false"]],
        ["Metal that contains iron is ____", "", ["ferrous"]],
        ["____ chrome is used to build up cylinder wall when it wears", "", ["hard"]],
        ["Piston rings are made from ____-based steel", "", ["iron"]],
        ["If the cylinder is iron, piston rings are ____ plated", "", ["chrome"]],
        ["If the cylinder is chrome plated, piston rings are ____", "", ["iron"]],
        ["Aircraft engines are cooled by ____", "", ["air"]],
        ["Air-cooled engines run (hotter/colder) than liquid cooled", "", ["hotter"]],
        ["Cylinders run at the same temperature (true/false)", "", ["false"]],
        ["____ directs air flow in air-cooled engines", "", ["baffling"]],
        ["temp gauge should go on the (first/coldest/hottest/middle/last) cylinder", "", ["hottest"]],
        ["The propeller is always bolted on to the ____ of the engine", "", ["front"]],
        ["Which manufacturer starts numbering cylinders from the back of the engine?", "", ["idk this one yet sorry"]],
        ]
    var week3 = []
    //return [week1, week2, week3].flat() //puts all items into one big list
    return week2
}

function newEngineQuestion(weeklists) {
    // pick a random question from the list of questions
    const randomIndex = Math.floor(Math.random() * weeklists.length);
    removedItem = weeklists.splice(randomIndex)

    return {
        question: removedItem[0],
        image: removedItem[1],
        answer: removedItem[2], //contains another list
    }
}
