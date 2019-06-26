package cn.springcloud.sample.dtos;

import cn.springcloud.sample.model.Client;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.sql.Date;

public class BillReceiptDTO {

    @JsonProperty("bill-receipt-number")
    private Integer number;
    @JsonProperty("bill-receipt-date")
    private Date date;
    @JsonProperty("bill-receipt-total")
    private Long total;
    @JsonProperty("bill-receipt-client")
    private Client client;
}
