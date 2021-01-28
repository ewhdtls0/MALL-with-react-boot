alter table items
modify column created DATETIME not null default CURRENT_TIMESTAMP;