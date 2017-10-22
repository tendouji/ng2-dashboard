import { Injectable } from '@angular/core';
import { DashboardData } from '../../models/data.model';

@Injectable()
export class GlobalDataService {
  transitionTimeStandard: number = 200; //same as CSS variable
  paddingLarge: number = 16; //in em same as CSS variable

  userObj: DashboardData.UserObject = {
    id: 'EMP182634',
    name: 'John Doe',
    position: 'Senior Manager',
    department: 'Marketing Division',
    photo: 'assets/img/sample-user.jpg'
  }

  notificationList: Array<DashboardData.NotificationObj> = [
    {
      photo: 'assets/img/sample-user-2.jpg', 
      isIcon: false,
      text: 'Vlad posted a new article.', 
      time: '1 min ago'
    }, 
    {
      photo: 'assets/img/sample-user-3.png', 
      isIcon: false,
      text: 'Kostya changed his contact information.', 
      time: '2 hrs ago'
    }, 
    {
      photo: 'shopping_cart', 
      isIcon: true,
      text: 'New orders received.', 
      time: '5 hrs ago'
    }, 
    {
      photo: 'assets/img/sample-user-4.png', 
      isIcon: false,
      text: 'Andrey replied to your comment.', 
      time: '1 day ago'
    }, 
    {
      photo: 'assets/img/sample-user-2.jpg', 
      isIcon: false,
      text: 'Today is Nasta\'s birthday.', 
      time: '2 days ago'
    } 
  ];

  todoList: Array<DashboardData.TodoObj> = [
    { 
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isDone: false,
      isUrgent: false
    },
    { 
      id: 2,
      text: 'Ut at sapien malesuada, iaculis diam ac, facilisis velit.',
      isDone: true,
      isUrgent: false
    },
    { 
      id: 4,
      text: 'Aliquam ac ante fermentum massa egestas pellentesque.',
      isDone: false,
      isUrgent: true
    },
    { 
      id: 5,
      text: 'Aenean sagittis leo ut sapien ullamcorper, vitae laoreet augue molestie.',
      isDone: false,
      isUrgent: false
    },
    { 
      id: 6,
      text: 'Sed venenatis sem non nisi tristique, at gravida velit molestie.',
      isDone: false,
      isUrgent: true
    },
    { 
      id: 7,
      text: 'Duis ac est eu turpis malesuada volutpat id et nisi.',
      isDone: false,
      isUrgent: false
    },
    { 
      id: 8,
      text: 'Quisque vitae tortor commodo est tincidunt laoreet.',
      isDone: false,
      isUrgent: true
    },
    { 
      id: 9,
      text: 'Pellentesque pharetra enim non sollicitudin vehicula.',
      isDone: false,
      isUrgent: false
    },
    { 
      id: 12,
      text: 'Vivamus ultrices nulla sed metus lobortis vehicula.',
      isDone: true,
      isUrgent: false
    },
    { 
      id: 14,
      text: 'In ultrices dui et massa pellentesque consectetur.',
      isDone: false,
      isUrgent: true
    },
    { 
      id: 15,
      text: 'Nunc vel ante et nisl gravida rutrum ut in eros.',
      isDone: false,
      isUrgent: false
    },
    { 
      id: 16,
      text: 'Donec molestie elit vitae enim maximus, in dignissim magna auctor.',
      isDone: false,
      isUrgent: true
    },
    { 
      id: 17,
      text: 'Ut at sapien malesuada, iaculis diam ac, facilisis velit.',
      isDone: true,
      isUrgent: false
    },
    { 
      id: 18,
      text: 'Aliquam ac ante fermentum massa egestas pellentesque.',
      isDone: false,
      isUrgent: true
    },
    { 
      id: 19,
      text: 'Aenean sagittis leo ut sapien ullamcorper, vitae laoreet augue molestie.',
      isDone: false,
      isUrgent: false
    },
    { 
      id: 20,
      text: 'Sed venenatis sem non nisi tristique, at gravida velit molestie.',
      isDone: false,
      isUrgent: true
    },
    { 
      id: 21,
      text: 'Duis ac est eu turpis malesuada volutpat id et nisi.',
      isDone: false,
      isUrgent: false
    },
    { 
      id: 22,
      text: 'Quisque vitae tortor commodo est tincidunt laoreet.',
      isDone: false,
      isUrgent: true
    },
    { 
      id: 23,
      text: 'Pellentesque pharetra enim non sollicitudin vehicula.',
      isDone: false,
      isUrgent: false
    },
    { 
      id: 24,
      text: 'Vivamus ultrices nulla sed metus lobortis vehicula.',
      isDone: true,
      isUrgent: false
    },
    { 
      id: 25,
      text: 'In ultrices dui et massa pellentesque consectetur.',
      isDone: false,
      isUrgent: true
    },
    { 
      id: 26,
      text: 'Nunc vel ante et nisl gravida rutrum ut in eros.',
      isDone: false,
      isUrgent: false
    },
    { 
      id: 27,
      text: 'Donec molestie elit vitae enim maximus, in dignissim magna auctor.',
      isDone: false,
      isUrgent: true
    }
  ];

  staffList: Array<DashboardData.UserObject> = [
    {
      id: 'EMP000234',
      name: 'Cox Carney',
      position: 'Senior Manager',
      department: 'ICT',
      photo: ''
    }, 
    {
      id: 'EMP083619',
      name: 'Lorraine Wise',
      position: 'Assistant Senior Manager',
      department: 'ICT',
      photo: ''
    }, 
    {
      id: 'EMP7126495',
      name: 'Stevie Gerrard',
      position: 'Senior Manager',
      department: 'Finance',
      photo: ''
    }, 
    {
      id: 'EMP062354',
      name: 'Vlad Vlad',
      position: 'Executive',
      department: 'Human Resource',
      photo: 'assets/img/sample-user-2.jpg'
    }, 
    {
      id: 'EMP823463',
      name: 'Kostya Bank',
      position: 'Junior Executive',
      department: 'Infrastructure',
      photo: 'assets/img/sample-user-3.png'
    }, 
    {
      id: 'EMP173643',
      name: 'Andrey Connor',
      position: 'Assistant Senior Manager',
      department: 'Infrastructure',
      photo: 'assets/img/sample-user-4.png'
    }, 
    {
      id: 'EMP823723',
      name: 'Nasta Lee',
      position: 'CIO',
      department: 'ICT',
      photo: 'assets/img/sample-user-2.jpg'
    }, 
    {
      id: 'EMP999725',
      name: 'Abdul Karim',
      position: 'Junior Executive',
      department: 'Marketing',
      photo: ''
    }, 
    {
      id: 'EMP274917',
      name: 'Chong Hong Kee',
      position: 'Senior Executive',
      department: 'Design',
      photo: ''
    }, 
    {
      id: 'EMP304653',
      name: 'Raja Krishna',
      position: 'Senior Executive',
      department: 'Finance',
      photo: ''
    }
  ];
  
  messageList: Array<DashboardData.MessageObject> = [
    {
      id: '001',
      from: 'Vlad Vlad',
      subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      message: 'In mattis malesuada arcu eu pretium. Etiam vitae eros vitae justo volutpat finibus eu ac purus. Aliquam ullamcorper ultrices quam id venenatis.',
      time: '2017/10/07',
      priority: 'high'
    }, 
    {
      id: '002',
      from: 'Cox Carney',
      subject: 'Suspendisse sit amet ullamcorper nisl, convallis placerat massa.',
      message: 'Etiam id metus vitae mi mattis ultricies in et quam. Donec ut nisl fringilla, rutrum orci et, placerat ipsum. Etiam non elit non magna ullamcorper aliquam. Fusce ac turpis venenatis, vulputate ex et, posuere orci.',
      time: '2017/09/16',
      priority: 'medium'
    }, 
    {
      id: '003',
      from: 'Andrey Connor',
      subject: 'Donec sit amet augue eget mi eleifend convallis id vitae lacus.',
      message: 'Pellentesque vehicula purus nibh, vel tempus est semper ac. Sed quis enim aliquet, dapibus mauris at, lacinia nisl. Aenean feugiat tortor mattis, fringilla risus ac, condimentum nisl. Donec egestas efficitur sapien id tempus.',
      time: '2017/09/11',
      priority: ''
    }, 
    {
      id: '005',
      from: 'Chong Hong Kee',
      subject: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      message: 'Proin sed convallis elit. Nulla rutrum sagittis mollis. Sed erat metus, viverra volutpat diam eu, interdum finibus quam. Duis rhoncus quam nisl. Integer laoreet ipsum sit amet nibh accumsan lacinia.',
      time: '2017/09/10',
      priority: ''
    }, 
    {
      id: '006',
      from: 'Chong Hong Kee',
      subject: 'Vivamus feugiat, dolor maximus aliquam porttitor.',
      message: 'Nisi tortor pharetra magna, nec hendrerit lacus sem quis diam. Nam congue vulputate varius. Donec eu lorem urna. Duis eu volutpat est. Praesent lorem neque, fermentum et augue id, lacinia viverra velit.',
      time: '2017/08/28',
      priority: ''
    }, 
    {
      id: '008',
      from: 'Chong Hong Kee',
      subject: 'Duis accumsan, est vel efficitur ultrices, lectus velit suscipit est.',
      message: 'A aliquet orci turpis sodales massa. Nunc iaculis nulla lectus, non eleifend dolor vehicula vitae. Aliquam enim augue, facilisis non purus id, convallis consequat neque.',
      time: '2017/08/28',
      priority: 'high'
    }
  ];

  staffCalendarData = {
    'month': 'September 2017',
    'days': '30',
    'weekends': [2,3,9,10,16,17,23,24,30],
    'holidays': [
      {'1': 'Hari Raya Haji'},
      {'9': 'King\'s Birthday'},
      {'16': 'Malaysia Day'},
      {'22': 'Awal Muharram'}
    ],
    'data': [
      {
        'Vlad Vlad' : [
          {'type': 'emergency-leave', 'description': 'Pick up kids', 'days': 1}
             ,'0','0','0','0','0','0','0','0','0',
          {'type': 'annual-leave', 'description': 'Holiday in Cuba', 'days': 20}
             ,'x','x','x','x','x','x','x','x','x',
          'x','x','x','x','x','x','x','x','x','x'
        ]
      },
      {
        'Cox Carney' : [
          '0','0','0','0','0',
          {'type': 'emergency-leave', 'description': 'Send Nikki to vet', 'days': 1}
                                 ,'0','0','0','0',
          '0','0','0','0','0','0','0','0','0','0',
          '0','0','0','0','0','0','0','0','0','0'
        ]
      },
      {
        'Andrey Connor' : [
          '0','0','0','0','0','0','0','0','0','0',
          '0','0','0','0','0','0','0',
          {'type': 'training', 'description': 'Microsoft Training', 'days': 3}
                                         ,'x','x',
          '0','0','0','0','0','0','0','0','0','0'
        ]
      },
      {
        'Chong Hong Kee' : [
          '0','0','0','0','0','0','0','0','0','0',
          '0','0','0','0','0','0','0','0','0','0',
          '0','0','0','0',
          {'type': 'emergency-leave', 'description': 'House on fire', 'days': 2}
                             ,'x','0','0','0','0'
        ]
      },
      {
        'Lorraine Wise' : [
          '0','0','0',
          {'type': 'annual-leave', 'description': 'Holiday in Italy', 'days': 4}
                         ,'x','x','x','0','0','0',
          '0','0','0','0','0','0','0','0','0','0',
          '0','0','0','0','0','0','0','0','0','0'
        ]
      },
      {
        'Raja Krishna' : [
          '0','0','0','0','0','0','0','0','0','0',
          '0','0','0','0',
          {'type': 'medical-leave', 'description': 'Dentist appointment', 'days': 1}
                             ,'0','0','0','0','0',
          '0','0','0','0','0','0','0','0','0','0'
        ]
      },
      {
        'Stevie Gerrard' : [
          '0','0','0','0','0','0','0','0','0','0',
          '0','0','0','0','0','0','0',
          {'type': 'training', 'description': 'Microsoft Training', 'days': 3}
                                         ,'x','x',
          '0','0','0','0','0','0','0','0','0','0'
        ]
      },
      {
        'Kostya Bank' : [
          '0','0','0','0','0','0','0','0','0','0',
          '0','0','0','0','0','0','0','0','0','0',
          '0','0','0','0','0','0','0','0','0','0'
        ]
      },
      {
        'Nasta Lee' : [
          '0','0','0','0','0','0','0','0','0','0',
          '0','0','0','0','0','0','0','0','0','0',
          '0','0','0','0','0','0','0','0','0','0'
        ]
      },
      {
        'Abdul Karim' : [
          '0','0','0','0','0','0','0','0','0','0',
          '0','0','0','0','0','0','0','0','0','0',
          '0','0','0','0','0','0','0','0','0','0'
        ]
      },
      {
        'Roy Park' : [
          '0','0','0','0','0','0','0','0','0','0',
          '0',
          {'type': 'medical-leave', 'description': 'Mental Therapy', 'days': 4}
                 ,'x','x','x','0','0','0','0','0',
          '0','0','0','0','0','0','0','0','0','0'
        ]
      },
      {
        'Dave Eggers' : [
          '0','0','0','0','0','0','0','0','0','0',
          '0','0','0','0','0','0','0','0','0','0',
          '0','0','0','0','0','0','0','0','0','0'
        ]
      }
    ]
  };

  constructor() { }
}
