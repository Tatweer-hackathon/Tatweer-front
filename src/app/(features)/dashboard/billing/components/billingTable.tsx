"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "src/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { PencilLine, Trash2 } from "lucide-react";
import { useState } from "react";

interface transaction {
  name: string;
  city: string;
  date: Date;
  pricing: string;
}
const transactions: transaction[] = [
    {
        name: "Electronic Device",
        city: "Electronics",
        date: new Date(),
        pricing: "available",
    },
    {
        name: "Furniture Item",
        city: "Furniture",
        date: new Date(),
        pricing: "unavailable",
    },
    {
        name: "Clothing Item",
        city: "Clothing",
        date: new Date(),
        pricing: "available",
    },
    ];


const BillingTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productState, setProductState] = useState<transaction[]>([]);
  const [error, setError] = useState("");

  const filtered = Array.isArray(transactions)
    ? transactions.filter(
        (h: transaction) =>
          h.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
          h.city.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
          h.pricing.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : [];

  return (
    <div className="space-y-6 w-5/6 ">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <Input
              placeholder="Rechercher un hébergement..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
              className="max-w-sm p-3"
            />
            <Button>Ajouter un Hébergement</Button>
          </div>
          <Table >
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Pricing</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody >
              {filtered &&
                filtered.map((item: transaction) => (
                  <TableRow key={item.name} className="odd:bg-gray-100">
                    <TableCell className="text-center">{item.name}</TableCell>
                    <TableCell className="text-center">{item.city}</TableCell>
                    <TableCell className="text-center">
                      {new Date(item.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-center">
                      {item.pricing}
                    </TableCell>
                    <TableCell className="space-x-2 flex justify-end gap-4">
                      <PencilLine className="cursor-pointer" />
                      <Trash2 className="cursor-pointer" />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
export default BillingTable;
