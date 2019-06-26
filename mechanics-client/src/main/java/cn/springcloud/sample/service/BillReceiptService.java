package cn.springcloud.sample.service;

import cn.springcloud.sample.repository.BillReceiptRepository;
import cn.springcloud.sample.config.LoggerConfig;
import cn.springcloud.sample.model.BillReceipt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillReceiptService {

    @Autowired
    BillReceiptRepository billReceiptRepository;

    public BillReceipt addBillReceipt(BillReceipt b) {
        billReceiptRepository.save(b);
        return b;
    }

    public List<BillReceipt> getAll() {
        return billReceiptRepository.findAll();
    }

    public BillReceipt getBillReceiptById(Integer id) {
        return billReceiptRepository.findById(id).orElse(null);
    }

    public void deleteBillReceiptById(Integer id) {
        BillReceipt receiptToDelete = getBillReceiptById(id);
        if (!receiptToDelete.equals(null)) {
            billReceiptRepository.delete(receiptToDelete);
        } else {
            LoggerConfig.LOGGER.error("The BillReceipt doesn't exist");
        }
    }

}
