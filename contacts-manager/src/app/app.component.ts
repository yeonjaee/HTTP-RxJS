import { Component } from '@angular/core';
import { User } from './user/user.model';
import { UserService } from './user/user.service';

@Component({
  selector: 'cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: User;
  searchedUser: User | undefined;

  constructor(public userService: UserService) {
    this.user = new User();
  }

  findUser(id: string) {
    const onSuccess = (result: any) => {
      const user = result;
      this.searchedUser = user;
    };

    this.userService.getUser(id, onSuccess);
  }

  addUser() {
    const newUser = { name: this.user.name, age: this.user.age };
    const callback = (result: User) => {
      const newUser: User = result;
      console.log(JSON.stringify(newUser));
      alert(
        `사용자 생성\nID:${newUser.id}\n이름:${newUser.name}\n나이:${newUser.age}`
      );
    };

    this.userService.addUser(newUser, callback);
    this.user = new User();
  }

  modifyUser() {
    if (this.user.id === 0) {
      this.addUser();
      return;
    }

    const callback = (result: User) => {
      const newUser: User = result;
      console.log(JSON.stringify(newUser));
      alert(
        `사용자 변경\nID:${newUser.id}\n이름:${newUser.name}\n나이:${newUser.age}`
      );
    };

    this.userService.modifyUser(this.user, callback);
  }

  removeUser(id: any) {
    const onSuccess = (res: { status: number }) => {
      if (res.status === 204) {
        alert(`사용자 ID:${id} 삭제 성공`);
        console.log(res);
        return;
      }
      alert(`사용자 ID:${id} 삭제 실패`);
    };

    this.userService.removeUser(id, onSuccess);
  }
}
