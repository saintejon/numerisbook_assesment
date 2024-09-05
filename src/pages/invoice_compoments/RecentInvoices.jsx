import React, { useState } from "react";
import { invoices } from "../../data/dataStore";
import { groupInvoicesByDate } from "../../utilities/invoiceformatter";
import Card from "../../components/layouts/Card";
import MainButton from "../../components/inputs/MainButton";
import InvoiceHistoryItem from "./InvoiceHistoryItem";
import Modal from "../../components/layouts/Modal";
import InvoiceDetails from "./InvoiceDetails";

const RecentInvoices = () => {
      const [modalVisible, setModalVisible] = useState(false);

      const [invoiceId, setInvoiceId] = useState("");
      const toggleModal = () => setModalVisible(!modalVisible);
      const groupedInvoices = groupInvoicesByDate(invoices);
      return (
            <div className="mt-4">
                  <Card>
                        <div className="flex justify-between items-center mb-2 gap-4">
                              <div>
                                    <h2 className="text-lg font-bold">
                                          Recent Invoices
                                    </h2>
                              </div>
                              <MainButton
                                    text="VIEW ALL INVOICES"
                                    borderColor={"slate-200"}
                                    bgcolor="bg-white"
                                    textColor={"text-primary"}
                              />
                        </div>

                        <div className="overflow-x-scroll">
                              {Object.keys(groupedInvoices).map(
                                    (dateKey, index) => (
                                          <div key={index} className="mb-6">
                                                <h3 className="text-gray-600 text-sm font-semibold mb-2">
                                                      {dateKey}
                                                </h3>
                                                {groupedInvoices[dateKey].map(
                                                      (invoice, idx) => (
                                                            <div
                                                                  onClick={() => {
                                                                        setInvoiceId(
                                                                              invoice.id
                                                                        );
                                                                        toggleModal();
                                                                  }}
                                                                  key={idx}
                                                            >
                                                                  <InvoiceHistoryItem
                                                                        invoice={
                                                                              invoice
                                                                        }
                                                                  />
                                                            </div>
                                                      )
                                                )}
                                          </div>
                                    )
                              )}
                        </div>
                  </Card>

                  <Modal toggleModal={toggleModal} modalVisible={modalVisible}>
                        <InvoiceDetails invoiceId={invoiceId} />
                  </Modal>
            </div>
      );
};

export default RecentInvoices;
