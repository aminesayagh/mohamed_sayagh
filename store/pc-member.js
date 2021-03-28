const pc_member = {
      state: {
            pcMember: {
                  titre: "PC MEMBER",
                  paragraphe: [
                        {
                              text: "MSR 2021.",
                              link: "https://2021.msrconf.org/",
                        },
                        {
                              text: "SANER 2020.",
                              link: "https://saner2020.csd.uwo.ca/",
                        },
                        {
                              text: "CASCON 2019 and 2020.",
                              link: "https://www-01.ibm.com/ibm/cas/cascon/",
                        },
                        {
                              text: "MSR 2018 Data Showcase",
                              link: "https://2018.msrconf.org/track/msr-2018-Data-Showcase-Papers",

                        },
                        {
                              text: "Greens 2018",
                              link: "http://greens.cs.vu.nl/",

                        },
                        {
                              text: "MSR 2017 Mining Challenge",
                              link: "http://2017.msrconf.org/#/challenge",

                        },
                  ]
            },
      },
      getters: {
            GET_PC_MEMBER: (state, payload) => state.pcMember,
      }
}

export default pc_member;