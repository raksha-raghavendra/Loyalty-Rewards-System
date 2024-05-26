import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  currentPoints: number | undefined;
  totalPointsRedeemed: number | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchReport();
  }

  fetchReport(): void {
    const userId = this.userService.getCurrentUserId();
    this.userService.getUserReport(userId).subscribe({
      next: (data) => {
        this.currentPoints = data.currentPoints;
        this.totalPointsRedeemed = data.totalPointsRedeemed;
      },
      error: (error) => {
        console.error('Error fetching report:', error);
      }
    });
  }
}
