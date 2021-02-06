import { Component, OnInit } from '@angular/core';
import {Voucher} from '../../models/voucher';
import {VoucherService} from '../../services/voucher.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list-voucher',
  templateUrl: './list-voucher.component.html',
  styleUrls: ['./list-voucher.component.css']
})
export class ListVoucherComponent implements OnInit {
  vouchers: Voucher[];
  voucherId: number;
  deliveryId = this.route.snapshot.paramMap.get('deliveryId');
  visibleDeleteModal = false;
  constructor(private voucherService: VoucherService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllVoucherByDelivery();
  }
  getAllVoucherByDelivery(): void{
    this.voucherService.getAllVouchersByDelivery(Number(this.deliveryId)).subscribe(
      (response: any) => {
        if (response == null){
          console.log('empty');
          this.vouchers = null;
        }else {
        this.vouchers = response.content;
      }},
      error => console.log(error)
    );
  }
  saveVoucher(): void{
    this.voucherService.create(Number(this.deliveryId)).subscribe(() => location.reload());
  }
  showModal(voucherId: number): void{
    this.voucherId = voucherId;
    this.visibleDeleteModal = true;
  }
  cancelModal(): void{
    this.visibleDeleteModal = false;
  }
  deleteVoucher(): void{
    this.voucherService.delete(this.voucherId).subscribe(() => location.reload());
  }
}
