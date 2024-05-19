import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Route } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog:MatDialog,
    private userServices:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.userServices.checktoken().subscribe((response:any)=>{
      this.router.navigate(['']);

    }, (error:any)=>{
      console.log(error);
    })
  }

}
