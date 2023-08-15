export interface InfoItemData {
    id: string,
    course: string,
    instructor: string,
    assignment: string,
    description: string,
    deadline: string,
  }

  export const day1 = new Date()
  export const day2 = new Date(day1)
  day2.setDate(day1.getDate() + 1)
  export const day3 = new Date(day2)
  day3.setDate(day2.getDate() + 1)

