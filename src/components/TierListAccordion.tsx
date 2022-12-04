import { Accordion } from "@mantine/core";
import { Person } from "../types/model";

const TierListAccordion = ({
  employee,
}: {
  employee: Array<Person>;
}) => {
  if (employee.length === 0) {
    return <div></div>;
  }

  return (
    <Accordion defaultValue="customization">
      {employee.map((item) => {
        return (
          <Accordion.Item value="customization">
            <Accordion.Control>
              {item.name}
            </Accordion.Control>
            <Accordion.Panel>
              <div>
                <TierListAccordion
                  employee={item.childrens}
                />
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default TierListAccordion;