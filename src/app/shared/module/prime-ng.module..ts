import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockUIModule } from 'primeng/blockui';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PasswordModule } from 'primeng/password';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { SkeletonModule } from 'primeng/skeleton';
import { ChipsModule } from 'primeng/chips';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { StepsModule } from 'primeng/steps';
import { AccordionModule } from 'primeng/accordion';
import { ImageModule } from 'primeng/image';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AvatarModule } from 'primeng/avatar';
import { CheckboxModule } from 'primeng/checkbox';
import { SliderModule } from 'primeng/slider';
import { TimelineModule } from 'primeng/timeline';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import { InputMaskModule } from 'primeng/inputmask';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
const COMPONENTS = [
  CommonModule,
  BreadcrumbModule,
  ButtonModule,
  CalendarModule,
  CardModule,
  DropdownModule,
  InputTextModule,
  MenubarModule,
  ProgressSpinnerModule,
  ConfirmDialogModule,
  TabMenuModule,
  ListboxModule,
  DialogModule,
  RadioButtonModule,
  PanelMenuModule,
  ToastModule,
  PanelModule,
  DividerModule,
  SelectButtonModule,
  InputNumberModule,
  TableModule,
  ProgressBarModule,
  MultiSelectModule,
  ConfirmPopupModule,
  TableModule,
  ProgressBarModule,
  MultiSelectModule,
  BlockUIModule,
  TabViewModule,
  DynamicDialogModule,
  OverlayPanelModule,
  PasswordModule,
  SkeletonModule,
  SidebarModule,
  ToastModule,
  ToolbarModule,
  ChipsModule,
  MenuModule,
  TimelineModule,
  StepsModule,
  AccordionModule,
  ImageModule,
  InputSwitchModule,
  AvatarModule,
  CheckboxModule,
  ToggleButtonModule,
  SliderModule,
  InputTextareaModule,
  AutoCompleteModule,
  BadgeModule,
  TagModule,
  InputMaskModule,
  VirtualScrollerModule
];
@NgModule({
  declarations: [],
  imports: [...COMPONENTS],
  exports: [...COMPONENTS],
  providers: [MessageService, ConfirmationService]
})
export class PrimeNgModule { }
