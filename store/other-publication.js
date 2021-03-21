const other_publications = {
      state: {
            otherPublications: {
                  titre: "Other Publications",
                  content: [
                        [
                              {
                                    text: "sayagh, m."
                              },
                              {
                                    text: " how cross-stack configuration errors can ruin a 360 degree panorama website.",
                                    link: "#"
                              },
                              {
                                    text: ". ieee software blog, 2017"
                              }
                        ]
                  ]
            },
      },
      getters: {
            GET_OTHER_PUBLICATIONS: (state, payload) => state.otherPublications,
      }
}

export default other_publications;