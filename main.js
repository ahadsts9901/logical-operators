// logical and

function logicaland(event)
{
    {
        event.preventDefault()
    };

    let education = document.querySelector('#education').value

    let experience = document.querySelector('#experience').value

    if  (education >= 16 && experience >= 2 ){
        
        title = 'You Are Elegible'

        explanation = 'Congratulations! you are elegible as a teacher'

    }   else    if  (education <16 && experience >= 2)    {

        title = 'You Are Not Elegible'

        explanation = 'Sorry! you have not enough education'

    }   else    if  (education >= 16 && experience<2)    {

        title = 'You Are Not Elegible'

        explanation = 'Sorry! you have not enough experience'

    }   else    {

        title = 'You Are Not Elegible'

        explanation = 'Sorry! you have not enough education and experience'

    }

    document.querySelector('#title').innerHTML = title
    document.querySelector('#explanation').innerHTML = explanation

};

//logical or

function logicalor(event){

    {
        event.preventDefault()
    }

    let paper1 = document.querySelector('#paper1').value

    let paper2 = document.querySelector('#paper2').value

    let paper3 = document.querySelector('#paper3').value

    if ( paper1 <33 || paper2 <33 || paper3<33 ){

        title = 'You Are Failed'

        explanation = 'You are failed in some papers'

    // }   else    if ( paper1 >=33 || paper2 <33 || paper3<33 ) {

    //     title = 'You Are Failed'

    //     explanation = 'You are failed in Paper 2 and Paper 3'       
    // }   else    if ( paper1 <33 || paper2 >=33 || paper3<33 ) {

    //     title = 'You Are Failed'

    //     explanation = 'You are failed in Paper 1 and Paper 3'     
    // }   else    if ( paper1 <33 || paper2 <33 || paper3 >=33 ) {

    //     title = 'You Are Failed'

    //     explanation = 'You are failed in Paper 1 and Paper 2'

    // }   else    if ( paper1 <33 || paper2 >=33 || paper3 >=33 ) {

    //     title = 'You Are Failed'

    //     explanation = 'You are failed in Paper 1'

    // }   else    if ( paper1 >=33 || paper2 <33 || paper3 >=33 ) {

    //     title = 'You Are Failed'

    //     explanation = 'You are failed in Paper 2'

    // }   else    if ( paper1 >=33 || paper2 >=33 || paper3 <33 ) {

    //     title = 'You Are Failed'

    //     explanation = 'You are failed in Paper 3'

    }   else{

        title = 'You Are Passed'

        explanation = 'Congratulations! You are passed in all papers'

    }

    document.querySelector('#title').innerHTML = title
    document.querySelector('#explanation').innerHTML = explanation

}

// logical not

function logicalnot(event)
{

    {
        event.preventDefault()
    }

    let num = document.querySelector(' #num').value

    if (!num) {

        title = 'Nothing Has Written'

        explanation = 'Now type something'

    }   else  {

        title = ('You Typed: ' + num)

        explanation = 'Now submit empty'

    }
    

    document.querySelector('#title').innerHTML = title
    document.querySelector('#explanation').innerHTML = explanation

}

