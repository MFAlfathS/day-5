var dataProject = [];

function addProject(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let startdate = document.getElementById("startdate").value;
    let enddate = document.getElementById("enddate").value;
    let content = document.getElementById("content").value;
    let image = document.getElementById("input-image").files[0];
    let imageURL = URL.createObjectURL(image);


    if (title === "") {
        return alert("Please entered your title!")
    } else if(startdate === "") {
        return alert("please entered your startdate")
    } else if(enddate === ""){
        return alert("please entered your enddate")
    } else if (content === "") {
        return alert ("Please entered your content!")
    } else if (imageURL === "") {
        return alert("Please entered your image!")
   }

   if (enddate < startdate) {
    return alert("The end date cannot be less than the start date")
   }

   let startDatePart = startdate.split("/")
   let endDatePart = enddate.split("/")

   let formatStartDate = startDatePart[2] + "-" + startDatePart[1] + "-" + startDatePart[0]
   let formatEndDate = endDatePart[2] + "-" + endDatePart[1] + "-" + endDatePart[0]

   let newStartDate = new Date(formatStartDate)
   let newEndDate = new Date(formatEndDate)

   let timeDifference = newEndDate - newStartDate

   let differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
   let differenceInMonths = Math.floor(differenceInDays / 30.24)
   let differenceInYears = Math.floor(differenceInMonths / 12)

   let duration;

   if (differenceInYears > 0) {
    duration = `${differenceInYears} years`
   } else if (differenceInMonths > 0) {
    duration = `${differenceInMonths} month`
   } else {
    duration = `${differenceInDays} day`
   }


   dataProject.push({
    title: title,
    startdate: startdate,
    enddate: enddate,
    content: content,
    image: imageURL,
    duration: duration
   })

   console.log(dataProject);

   newData()
}

function newData(){
    document.getElementById("list-project").innerHTML = ""

    for (let i = 0; i < dataProject.length; i++) {
        const project = dataProject[i];
    
        document.getElementById("list-project").innerHTML +=`
            <div class="div-project" style="box-shadow: 10px 5px 10px black; border-radius: 20px; width: 200px; margin-right: 20px; padding: 30px; float: left;">
                <img class="image-project" width="200px" src="${project.image}">
                <h3 class="div-project">${project.title}</h3>
                <p class="div-project">${project.startdate} - ${project.enddate}</p>
                <p class="div-project">${project.duration}</p>
                <p class="div-project">${project.content}</p>
            </div>
        `
    
    }
}