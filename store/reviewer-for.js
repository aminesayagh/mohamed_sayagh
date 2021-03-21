const reviewer_for = {
      state: {
            reviewFor: {
                  titre: "Reviewer for",
                  paragraphe: [
                        {
                              text: "Empirical Software Engineering (EMSE)",
                              link: "#",
                        },
                        {
                              text: "Journal of Systems and Software",
                              link: "#",
                        },
                        {
                              text: "IEEE Software",
                              link: "#",
                        },
                  ]
            },
      },
      getters: {
            GET_REVIEW_FOR: (state, payload) => state.reviewFor,
      }
}

export default reviewer_for;