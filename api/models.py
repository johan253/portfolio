# coding: utf-8
from sqlalchemy import ARRAY, Column, DateTime, Integer, String, Text, text
from sqlalchemy.dialects.postgresql import TIMESTAMP
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()
metadata = Base.metadata


class Experience(Base):
    __tablename__ = 'Experience'

    id = Column(Text, primary_key=True)
    title = Column(Text, nullable=False)
    company = Column(Text, nullable=False)
    location = Column(Text, nullable=False)
    startDate = Column(TIMESTAMP(precision=3), nullable=False)
    endDate = Column(TIMESTAMP(precision=3))
    bullets = Column(ARRAY(Text()))


class Image(Base):
    __tablename__ = 'Images'

    id = Column(Text, primary_key=True)
    url = Column(Text, nullable=False)
    name = Column(Text, nullable=False, unique=True)


class Project(Base):
    __tablename__ = 'Project'

    id = Column(Text, primary_key=True)
    name = Column(Text, nullable=False, unique=True)
    tags = Column(ARRAY(Text()))
    url = Column(Text, nullable=False)
    img = Column(Text, nullable=False)
    order = Column(Integer, nullable=False, unique=True)
    description = Column(Text, nullable=False, server_default=text("''::text"))


class PrismaMigration(Base):
    __tablename__ = '_prisma_migrations'

    id = Column(String(36), primary_key=True)
    checksum = Column(String(64), nullable=False)
    finished_at = Column(DateTime(True))
    migration_name = Column(String(255), nullable=False)
    logs = Column(Text)
    rolled_back_at = Column(DateTime(True))
    started_at = Column(DateTime(True), nullable=False, server_default=text("now()"))
    applied_steps_count = Column(Integer, nullable=False, server_default=text("0"))
