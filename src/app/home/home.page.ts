import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
// import { Plugins } from '@capacitor/core';
// const { NativeBiometric } = Plugins;
// import { AppLauncher } from '@ionic-native/app-launcher/ngx';
import { AppLauncher, OpenURLOptions } from '@capacitor/app-launcher';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private platform: Platform // private appLauncher: AppLauncher
  ) {}

  // https://play.google.com/store/apps/details?id=com.workday.workdroidapp
  //https://apps.apple.com/us/app/workday/id316800034

  async launchApp() {
    let app;

    if (this.platform.is('ios')) {
      app = 'com.workday.workdayapp';
    } else if (this.platform.is('android')) {
      app = 'com.workday.workdroidapp';
    }
    var option: OpenURLOptions = {
      url: app,
    };

    AppLauncher.canOpenUrl(option)
      .then((appopen: any) => {
        console.log('appopen  is ', appopen);
      })
      .catch((error: any) => {
        console.log('error  is ', error);
      });
  }

  async launchWorkday() {
    let app;
    if (this.platform.is('ios')) {
      app = 'com.workday.workdayapp';
    } else if (this.platform.is('android')) {
      app = 'com.workday.workdroidapp';
    }
    var option: OpenURLOptions = {
      url: app,
    };

    AppLauncher.openUrl(option)
      .then((appopen: any) => {
        //always this is returing as false. I installed app on my mobile
        console.log('appopen  is ', appopen);
      })
      .catch((error: any) => {
        console.log('error  is ', error);
      });
  }
}
