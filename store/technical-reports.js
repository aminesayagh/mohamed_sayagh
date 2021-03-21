const technical_reports = {
      state: {
            TechnicalReports: {
                  titre: "Technical Reports",
                  type: "list-paragraphe",
                  content: [
                        [
                              {
                                    text: "Sayagh, M. And Adams, B. (2016)."
                              },
                              {
                                    text: "backslicer: a lightweight backward slicer",
                                    link: "#",
                              },
                              {
                                    text: ", technical report."
                              }
                        ],
                        [
                              {
                                    text: "Sayagh, M. And Adams, B. (2016). "
                              },
                              {
                                    text: "phpslicer: slicing dynamically typed programming languages",
                                    link: "#",

                              },
                              {
                                    text: ", technical report."
                              }
                        ]
                  ]
            },
      },
      getters: {
            GET_TECHNICAL_REPORTS: (state, payload) => state.TechnicalReports,
      }
}

export default technical_reports;