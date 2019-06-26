package cn.springcloud.sample.repository;

import cn.springcloud.sample.model.BillReceipt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BillReceiptRepository extends JpaRepository<BillReceipt, Integer> {
}
