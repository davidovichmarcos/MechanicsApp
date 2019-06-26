package cn.springcloud.sample.controller;

import cn.springcloud.sample.model.BillReceipt;
import cn.springcloud.sample.service.BillReceiptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@RequestMapping("/billreceipt")
@RestController
public class BillReceiptController {

    @Autowired
    BillReceiptService billReceiptService;
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "", produces = {MediaType.APPLICATION_JSON})
    public BillReceipt addBillReceipt(@RequestBody BillReceipt b) {
        return billReceiptService.addBillReceipt(b);
    }

    @GetMapping(value = "", produces = {MediaType.APPLICATION_JSON})
    public List<BillReceipt> getAll(){
        return billReceiptService.getAll();
    }

    @GetMapping(value = "/{id}", produces = {MediaType.APPLICATION_JSON})
    public BillReceipt getBillReceiptById(@RequestParam Integer id) {
        return billReceiptService.getBillReceiptById(id);
    }

    @DeleteMapping(value = "/{id}", produces = {MediaType.APPLICATION_JSON})
    public void deleteBillReceiptById(@RequestParam Integer id) {
        billReceiptService.deleteBillReceiptById(id);
    }

}

