import { createStore } from "vuex";

export default createStore({
  state: {
    activeSection: "home",
    showLightBox: false,
    navActive: false,
    desktopNav: false,
    lightBoxImageLinkList: [],
    currentImgIndex: 0,
    services: [
      {
        id: 1,
        title: "Web Development",
        description:
          "Highly responsive FrontEnd and backend software solutions",
        iconClass: "bi bi-phone",
      },
      {
        id: 2,
        title: "Architectural design",
        description:
          "Functional and aesthetically pleasing architectural designs",
        iconClass: "bi bi-pen",
      },
      {
        id: 3,
        title: "Mobile and Desktop Applications",
        description:
          "High performance mobile and desktop application development",
        iconClass: "bi bi-briefcase",
      },
    ],
    skills: [
      {
        id: 1,
        skill: "AutoCAD",
        imageSrc: "autocad.png",
      },
      {
        id: 2,
        skill: "SketchUp",
        imageSrc: "sketchup.png",
      },
      {
        id: 3,
        skill: "ArchiCAD",
        imageSrc: "archicad.png",
      },
      {
        id: 4,
        skill: "All Microsoft Office packages",
        imageSrc: "ms-office.png",
      },
      {
        id: 5,
        skill: "JavaScript",
        imageSrc: "javascript.png",
      },
      {
        id: 6,
        skill: "Vue.js",
        imageSrc: "vue.png",
      },
      {
        id: 7,
        skill: "Python",
        imageSrc: "python.png",
      },
      {
        id: 8,
        skill: "Django",
        imageSrc: "django.png",
      },
      {
        id: 9,
        skill: "Flask",
        imageSrc: "flask.png",
      },
      {
        id: 9,
        skill: "PyQT5",
        imageSrc: "pyqt.png",
      },
    ],
    facts: [
      {
        title: "Happy Clients",
        desc: "",
        value: 16,
        iconClass: "bi bi-emoji-smile",
      },
      {
        title: "Projects",
        desc: "in Architectural and Software development",
        value: 27,
        iconClass: "bi bi-journal-richtext",
      },
      {
        title: "hours",
        desc: "customer support",
        value: 15,
        iconClass: "bi bi-headset",
      },
      {
        title: "workers",
        desc: "",
        value: 2,
        iconClass: "bi bi-people",
      },
    ],
    adminInfo: {
      bioOutro:
        "Growing up in the military environment has taught me the importance of orderliness, courage, punctuality and discipline.",
      bioIntro:
        "I was born in the Nigerian Defence Academy, Kaduna state. I did my primary and secondary education in Kaduna state then I attended School of Basic and Remedial Studies Funtua where I started IJMB in the year 2016. I left in 2017 when I got Admission into the Federal University of Technology Minna in Niger State where I started studying Architecture before I transfered to Caleb University Lagos in the year 2020 because of ASUU strike.",
      bioData: [
        {
          title: "Age",
          value: "23 years",
        },
        {
          title: "Website",
          value: "archdesigntips.com",
        },
        {
          title: "Phone",
          value: "08147751998",
        },
        {
          title: "City",
          value: "Kaduna state",
        },
        {
          title: "degree",
          value: "BSc. Architecture",
        },
        {
          title: "email",
          value: "abuakar21@gmail.com",
        },
        {
          title: "freelance",
          value: "Available",
        },
      ],
    },
    portfolioProjects: [
      {
        id: 1,
        title: "Proposed 3 Bedroom Bungalow Design for Mr. Joseph",

        imageSrc: "oga-naibi-3bedroom.png",
        client: "Mr. Kalu Joseph Ebubechukwu",
        url: "",
        date: "",
        location: "Kaduna state",
        description:
          "I was given a sketch of the floor plan by an Architect to develop a complete set of working drawings for the project. I was also the one that designed the facade of the building. For this project I used AutoCAD, Sketchup and Vray.",
        desc_title: "About Project",
        category: 1,
        productImages: [
          {
            id: 1,
            url: "oga-naibi-3bedroom.png",
          },
          {
            id: 2,
            url: "oga-naibi-3bedroom-cover-page.png",
          },
          {
            id: 3,
            url: "oga-naibi-3bedroom-floor-plan.png",
          },
        ],
      },
      {
        id: 2,
        title: "Residential Housing Estate Design",

        imageSrc: "mr-abdullahi-cover-page.png",
        client: "Mr. Abdullahi Abdulrazak",
        location: "Kaduna State",
        date: "Oct, 2022",
        description:
          "Design of a Residential Housing Estate for Mr. Abdullahi Abdulrazak in Kaduna State. This design has 6 Units of 5 bedroom detached apartments and 14 units of 5 bedroom terrace apartments.",
        desc_title:
          "Proposed 14 x 5bedroom terrace apartments and 6 x 5bedroom detached housing estate edsign",
        category: 1,
        productImages: [
          {
            id: 1,
            url: "mr-abdullahi-cover-page.png",
          },
          {
            id: 2,
            url: "mr-abdullahi-semi-detached.png",
          },
          {
            id: 3,
            url: "mr-abdullahi-semi-detached-2.png",
          },
          {
            id: 4,
            url: "mr-abdullahi-detached.png",
          },
          {
            id: 5,
            url: "mr-abdullahi-detached-ground-floor-plan.png",
          },
          {
            id: 6,
            url: "mr-abdullahi-detached-roof-plan.png",
          },
        ],
      },
      {
        id: 3,
        title: "Proposed Sopping Center",

        imageSrc: "ndacsmcs-shopping-center.png",
        client:
          "Nigerian Defence Academy Civilian Staff Multipurpose Coorperative Society",
        date: "Dec, 2021",
        location: "Nigerian Defence Academy Old Site, Kaduna state",
        description:
          "Design of a shopping center for the Nigerian Defence Academy Civilian Staff Multipurpose Coorperative Society. This project has 3 units of shops, a minimart and 2 storage rooms.",
        desc_title: "Tech stack and Software Architecture",
        category: 1,
        productImages: [
          {
            id: 1,
            url: "ndacsmcs-shopping-center-1.png",
          },
          {
            id: 2,
            url: "ndacsmcs-shopping-center-2.png",
          },
          {
            id: 3,
            url: "ndacsmcs-shopping-center-floor-plan.png",
          },
          {
            id: 4,
            url: "ndacsmcs-shopping-center-roof-plan.png",
          },
        ],
      },
      {
        id: 4,
        title: "Proposed Mix-Use Building",

        imageSrc: "mix-use.png",
        client: "School Project",
        location: "Lagos State",
        date: "Jan 2021",
        description:
          "This is a design of a mix-use building having an Architectural firm and a 4 bedroom apartment.",
        desc_title: "Proposed Mix-Use Building",
        category: 1,
        productImages: [
          {
            id: 1,
            url: "mix-use.png",
          },
        ],
      },
      {
        id: 5,
        title: "Proposed 3 bedroom bungalow design for Mr. Garba Usman Musa",

        imageSrc: "uncle-gambo.jpg",
        client: "Mr. Garba Usman Musa",
        location: "Tunga, Niger state",
        date: "Jan, 2021",
        description:
          "Design of a three Bedroom bungalow for Mr. Garba Usman Musa at Tunga residential area of Niger State.",
        desc_title:
          "Proposed 3 bedroom bungalow design for Mr. Garba Usman Musa",
        category: 1,
        productImages: [
          {
            id: 1,
            url: "uncle-gambo-classic-1.jpg",
          },
          {
            id: 2,
            url: "uncle-gambo-classic-2.jpg",
          },
          {
            id: 3,
            url: "uncle-gambo-classic-3.jpg",
          },
        ],
      },
      {
        id: 6,
        title:
          "Proposed Contemporary 3 bedroom bungalow design for Mr. Garba Usman Musa",

        imageSrc: "uncle-gambo-contemporary.jpg",
        client: "Mr. Garba Usman Musa",
        location: "Tunga, Niger state",
        date: "Jan, 2021",
        description:
          "Design of a Contemporary three Bedroom bungalow for Mr. Garba Usman Musa at Tunga residential area of Niger State.",
        desc_title:
          "Proposed contemporary 3 bedroom bungalow design for Mr. Garba Usman Musa",
        category: 1,
        productImages: [
          {
            id: 1,
            url: "uncle-gambo-contemporary-1.jpg",
          },
          {
            id: 2,
            url: "uncle-gambo-contemporary-2.jpg",
          },
        ],
      },
      {
        id: 7,
        title:
          "Proposed 6 x 2 bedroom terrace apartment design for Cdr. IU Umoh",

        imageSrc: "aqs.png",
        client: "Cdr. IU Umoh",
        date: "Oct, 2022",
        description:
          "Design of a 6 x 2 bedroom terrace apartment for Naval Cdr. IU Umoh",
        desc_title: "Proposed 6 x 2 bedroom terrace apartment design",
        category: 1,
        productImages: [
          {
            id: 1,
            url: "aqs-cover-page.png",
          },
          {
            id: 2,
            url: "aqs-ground-floor-plan.png",
          },
          {
            id: 3,
            url: "aqs-first-floor-plan.png",
          },
          {
            id: 4,
            url: "aqs-roof-plan.png",
          },
        ],
      },
      {
        id: 8,
        title: "Akey Commercial Building",

        imageSrc: "akey.png",
        client: "School Project",
        date: "April, 2022",
        description:
          "Design of a commercial building having a multi level car park, cinema, restaurant, supermarket and lettable office spaces.",
        desc_title: "Akey Commercial Building",
        category: 1,
        productImages: [
          {
            id: 1,
            url: "akey-1.png",
          },
          {
            id: 5,
            url: "akey-5.png",
          },
          {
            id: 2,
            url: "akey-2.png",
          },
          {
            id: 3,
            url: "akey-3.png",
          },
          {
            id: 4,
            url: "akey-4.png",
          },
        ],
      },
      {
        id: 9,
        title: "E-commerce website for Furniture Shop",
        url: "https://atiamu-furnitures.netlify.app/",
        imageSrc: "atiamu-furnitures.png",
        client: "ATIAMU",
        date: "July, 2022",
        description:
          "Development of the front-end of an e-commerce website for a furniture sales shop",
        desc_title: "ATIAMU Furnitures",
        category: 2,
        productImages: [
          {
            id: 1,
            url: "atiamu-furnitures.png",
          },
        ],
      },
    ],
    portfolioCategories: [
      {
        id: 1,
        title: "Architecture",
      },
      {
        id: 2,
        title: "Web Development",
      },
    ],
  },
  getters: {
    getProject: (state, payload) => {
      const project = state.portfolioProjects.filter((el) => el.id == payload);
      return project[0];
    },
  },
  mutations: {
    setActiveSection: (state, payload) => {
      state.activeSection = payload;
    },
    toggleLightBox: (state) => {
      state.showLightBox = !state.showLightBox;
    },
    setNavValue: (state, payload) => {
      state.navActive = payload.navActive;
      state.desktopNav = payload.desktopNav;
    },
    toggleNav: (state) => {
      state.navActive = !state.navActive;
    },
    setLightBoxImages: (state, payload) => {
      state.lightBoxImageLinkList = payload.LightBoxImages;
      state.currentImgIndex = payload.currentImgIndex;
    },
  },
  actions: {},
  modules: {},
});
