/*=============================================
=                   About Me                  =
=============================================*/

/*
    @Author: Brian Dunn                           
    @Creation Date: 2-22-2020                     
    @Description: This is the About Me component. 
      It provides some insight to me. All pictures 
      link to relevant pages when clicked.
*/

import { Component } from "@angular/core";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"]
})
export class AboutMeComponent {
  constructor() {}

  LinkedInPhoto: string = "./assets/LinkedInPhoto.jpg";

  slogan: string =
    "Passionate Software Developer seeking an entry level Software Developer position.";
  SalesPitch: string =
    "While my experience is primarily with software implementation, I am looking to shift to software development.";
  MyEducation: string =
    "I graduated from the University of Wisconsin- Whitewater with a quadruple major on my Bachelor of Business Administration degree. The four majors are: General Business, Human Resource Management, Supply Chain and Operations Management, and Information Technology. Next, I began taking college classes between my junior and senior year of high school. I completed my BBA with the first major just two and a half years after I graduated from high school. Additionally, I have an Associates of Applied Science degree in Accounting.";

  MySkills: String[] = [
    "SQL",
    "Java",
    "JavaScript (ES6)",
    "ReactJS",
    "Angular",
    "AngularJS",
    "Sass",
    "HTML5",
    "CSS3",
    "XML",
    "JSON",
    "PHP",
    "Bootstrap",
    "ITIL",
    "jQuery",
    "AJAX",
    "VB.Net",
    "Customer Service",
    "TypeScript",
    "RESTful API",
    "Linux CLI",
    "Responsive Web Design",
    "C#",
    "Visual Studio Code",
    "Agile",
    "Project Management",
    "Scrum",
    "Software Documentation",
    "Salesforce"
  ];

  GithubLogo: string = "./assets/githublogo.png";
  GithubUrl: string = "https://www.github.com/DunnBC22";
  LinkedInLogo: string = "./assets/linkedinlogo.png";
  LinkedInUrl: string = "https://www.linkedin.com/in/DunnBC22";
}
