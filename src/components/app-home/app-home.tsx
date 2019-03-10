import {Component, Prop} from '@stencil/core';
import {ItemReorderEventDetail} from '@ionic/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  @Prop({connect: 'ion-loading-controller'}) loadingCtrl: HTMLIonLoadingControllerElement;
  @Prop({connect: 'ion-popover-controller'}) popoverController: HTMLIonPopoverControllerElement;
  
  sort(e: CustomEvent<ItemReorderEventDetail>) {
    e.detail.complete(true);
  }
  
  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-title>Test</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        
        <ion-list>
          <ion-reorder-group disabled={false} onIonItemReorder={(e) => this.sort(e)}>
            
            <ion-item type={'button'}>
              <ion-label>Test 1</ion-label>
              <ion-reorder/>
            </ion-item>
            
            <ion-item type={'button'}>
              <ion-label>Test 2</ion-label>
              <ion-reorder/>
            </ion-item>
            
            <ion-item type={'button'}>
              <ion-label>Test 3</ion-label>
              <ion-reorder/>
            </ion-item>
            
            <ion-item type={'button'}>
              <ion-label>Test 4</ion-label>
              <ion-reorder/>
            </ion-item>
            
            <ion-item type={'button'}>
              <ion-label>Test 5</ion-label>
              <ion-reorder/>
            </ion-item>
          
          </ion-reorder-group>
        </ion-list>
      
      </ion-content>
    ];
  }
}
