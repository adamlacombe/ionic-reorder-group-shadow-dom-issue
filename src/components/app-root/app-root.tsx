import {Component} from '@stencil/core';
import '@ionic/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false
})
export class AppRoot {
  
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home"/>
        </ion-router>
        <ion-nav/>
      </ion-app>
    );
  }
}
