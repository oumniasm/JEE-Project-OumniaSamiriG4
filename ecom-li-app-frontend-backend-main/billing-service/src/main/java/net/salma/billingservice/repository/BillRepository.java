package net.OumniaSamiri.billingservice.repository;

import net.OumniaSamiri.billingservice.entities.Bill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillRepository  extends JpaRepository<Bill, Long> {
}
