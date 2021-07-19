const openMenu = () => {
    const mobimenu = document.getElementById('mobimenu')
    const header = document.getElementById('header')
    header.style.opacity = "0"
    mobimenu.style.display = "block"
}

const closeMenu = () => {
    const mobimenu = document.getElementById('mobimenu')
    const header = document.getElementById('header')
    header.style.opacity = "1"
    mobimenu.style.display = "none"
}

const showfeature = (which) => {
    const feature1 = document.getElementById("feature1")
    const feature2 = document.getElementById("feature2")
    const feature3 = document.getElementById("feature3")

    const spanfeature1 = document.getElementById("spanfeature1")
    const spanfeature2 = document.getElementById("spanfeature2")
    const spanfeature3 = document.getElementById("spanfeature3")

    feature1.style.display = "none"
    feature2.style.display = "none"
    feature3.style.display = "none"
    // colorblockblue.style.display = "none"

    spanfeature1.classList.remove("featureactive")
    spanfeature2.classList.remove("featureactive")
    spanfeature3.classList.remove("featureactive")

    if (which == 1) {
        feature1.style.display = "flex"
        spanfeature1.classList.add("featureactive")
        colorblockblue.style.display = "block"
    }
    if (which == 2) {
        colorblockblue.style.display = "none"
        spanfeature2.classList.add("featureactive")
        feature2.style.display = "flex"
    }
    if (which == 3) {
        colorblockblue.style.display = "none"
        spanfeature3.classList.add("featureactive")
        feature3.style.display = "flex"
    }
}

const toggelanswer = (which) => {

    //here which brings the local id

    /* defining all the required elements */

    //answer
    const answerstate1 = document.getElementById('answer1')
    const answerstate2 = document.getElementById('answer2')
    const answerstate3 = document.getElementById('answer3')
    const answerstate4 = document.getElementById('answer4')

    //arrows
    const answerarrowstate1 = document.getElementById('answerarrow1')
    const answerarrowstate2 = document.getElementById('answerarrow2')
    const answerarrowstate3 = document.getElementById('answerarrow3')
    const answerarrowstate4 = document.getElementById('answerarrow4')

    //answers array
    const arrowarray = [answerarrowstate1, answerarrowstate2, answerarrowstate3, answerarrowstate4]
    //arrows array
    const answerarray = [answerstate1, answerstate2, answerstate3, answerstate4]


    //toggel current answer arrow color n orientation 
    const toggelarrowcolor = (answermeta, arrowmeta) => {
        if (answermeta.hidden) {
            arrowmeta.children[0].style.stroke = '#5267DF'
            arrowmeta.style.transform = 'rotateX(0deg)'
        } else {
            arrowmeta.children[0].style.stroke = '#fa5757'
            arrowmeta.style.transform = 'rotateX(180deg)'
        }
    }

    //manging answers, arrows state and color 
    const statemanager = (exception) => {

        for (let i = 0; i < arrowarray.length; i++) {
            if (i === exception) {

                answerarray[i].hidden = !answerarray[i].hidden
                toggelarrowcolor(answerarray[i], arrowarray[i])

            } else {

                answerarray[i].hidden = true
                arrowarray[i].children[0].style.stroke = '#5267DF'
                arrowarray[i].style.transform = 'rotateX(0deg)'

            }
        }
    }

    statemanager(parseInt(which))
}