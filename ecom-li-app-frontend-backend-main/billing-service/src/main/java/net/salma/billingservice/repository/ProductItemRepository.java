package net.OumniaSamiri.billingservice.repository;

import net.OumniaSamiri.billingservice.entities.ProductItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductItemRepository extends JpaRepository<ProductItem, Long> {
}
