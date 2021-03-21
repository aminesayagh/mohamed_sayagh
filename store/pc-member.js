const pc_member = {
      state: {
            pcMember: {
                  titre: "PC MEMBER",
                  paragraphe: [
                        {
                              text: "CASCON 2019.",
                              link: "#",

                        },
                        {
                              text: "MSR 2018 Data Showcase",
                              link: "#",

                        },
                        {
                              text: "Greens 2018",
                              link: "#",

                        },
                        {
                              text: "MSR 2017 Mining Challenge",
                              link: "#",

                        },
                  ]
            },
      },
      getters: {
            GET_PC_MEMBER: (state, payload) => state.pcMember,
      }
}

export default pc_member;