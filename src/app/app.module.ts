import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChartModule } from 'angular2-chartjs';

import { GlobalDataService } from './shared/services/global-data/global-data.service';
import { GlobalServicesService } from './shared/services/global-services/global-services.service';

import { DecimalizePipe } from './shared/pipes/decimalize/decimalize.pipe';
import { CharacterLimitPipe } from './shared/pipes/character-limit/character-limit.pipe';
import { ObjectReaderPipe } from './shared/pipes/object-reader/object-reader.pipe';

import { AppComponent } from './app.component';
import { SitePreloaderComponent } from './shared/components/site-preloader/site-preloader.component';
import { DimmerComponent } from './shared/components/dimmer/dimmer.component';
import { ResponsiveTableComponent } from './shared/components/responsive-table/responsive-table.component';
import { PopupModalComponent } from './shared/components/popup-modal/popup-modal.component';
import { SlideInPanelComponent } from './shared/components/slide-in-panel/slide-in-panel.component';

import { HeaderComponent } from './shared/layout/header/header.component';
import { DashboardComponent } from './shared/layout/dashboard/dashboard.component';
import { UserProfileComponent } from './shared/layout/side-panels/user-profile/user-profile.component';
import { NotificationComponent } from './shared/layout/side-panels/notification/notification.component';
import { MenuComponent } from './shared/layout/side-panels/menu/menu.component';
import { DashboardPanelComponent } from './shared/layout/dashboard/dashboard-panel/dashboard-panel.component';
import { TodoListComponent } from './widget/todo-list/todo-list.component';
import { StaffListComponent } from './widget/staff-list/staff-list.component';
import { LocationComponent } from './widget/location/location.component';
import { MiniChartsComponent } from './widget/mini-charts/mini-charts.component';
import { MessagesComponent } from './widget/messages/messages.component';
import { PagesComponent } from './shared/layout/pages/pages.component';
import { CommaSeparatorPipe } from './shared/pipes/comma-separator/comma-separator.pipe';
import { ContactFormComponent } from './widget/contact-form/contact-form.component';
import { StaffCalendarComponent } from './widget/staff-calendar/staff-calendar.component';
import { SettingsComponent } from './shared/layout/side-panels/settings/settings.component';

const appRoutes: Routes = [
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    data: { title: 'Dashboard' }
  },
  { 
    path: 'features/pages',
    component: PagesComponent,
    data: { title: 'Buttons' }
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: DashboardComponent } 
];

@NgModule({
  declarations: [
    DecimalizePipe,
    CharacterLimitPipe,
    ObjectReaderPipe,

    AppComponent,
    HeaderComponent,
    DashboardComponent,
    DashboardPanelComponent,
    PagesComponent,
    
    ResponsiveTableComponent,
    DimmerComponent,
    SitePreloaderComponent,
    PopupModalComponent,
    
    SlideInPanelComponent,
    MenuComponent,
    UserProfileComponent,
    NotificationComponent,
    
    TodoListComponent,
    StaffListComponent,
    LocationComponent,
    MiniChartsComponent,
    MessagesComponent,
    CommaSeparatorPipe,
    ContactFormComponent,
    StaffCalendarComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
    ChartModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [GlobalDataService, GlobalServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
