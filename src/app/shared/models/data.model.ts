export declare module DashboardData {
  export interface UserObject {
    id: string,
    name: string,
    position: string,
    department: string,
    photo: string
  }
  
  export interface MessageObject {
    id: string,
    from: string,
    subject: string,
    message: string,
    time: string,
    priority: string
  }
  
  export interface NotificationObj {
    photo: string,
    isIcon: boolean,
    text: string,
    time: string
  }
  
  export interface TodoObj {
    id: number,
    text: string,
    isDone: boolean,
    isUrgent: boolean,
  }
}

  
  
