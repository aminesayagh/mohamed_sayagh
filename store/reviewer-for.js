const reviewer_for = {
      state: {
            reviewFor: {
                  titre: "Reviewer for",
                  paragraphe: [
                        {
                              text: "ACM Transactions on Software Engineering and Methodology (TOSEM)",
                              link: "https://dl.acm.org/journal/tosem",
                        },
                        {
                              text: "Empirical Software Engineering (EMSE)",
                              link: "https://link.springer.com/journal/10664",
                        },
                        {
                              text: "Journal of Systems and Software",
                              link: "https://ees.elsevier.com/jss/default.asp",
                        },
                        {
                              text: "IEEE Software",
                              link: "https://www.computer.org/csdl/magazine/so",
                        },
                  ]
            },
      },
      getters: {
            GET_REVIEW_FOR: (state, payload) => state.reviewFor,
      }
}

export default reviewer_for;