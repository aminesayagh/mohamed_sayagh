const other_activities = {
      state: {
            otherActivities: {
                  titre: "other activities",
                  paragraphe: [
                        [
                              "Student volunteer in ICSE-2016"
                        ]
                  ]
            }
      },
      getters: {
            GET_OTHER_ACTIVITIES: (state, payload) => state.otherActivities,
      }
}

export default other_activities;